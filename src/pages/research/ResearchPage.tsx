import React, { useEffect, useState, useRef } from "react";
import { mockResearchData } from "../../mock/research_mock";
import ResearchTopic from "./components/ResearchTopic";
import Highlights from "./components/Highlights";
import More from "./components/More";
import { APIObject, Publication } from "./Interfaces";
import { Search } from "lucide-react"; // Import the Search icon from lucide-react

// Define the prop types for PopupOverlay
interface PopupOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  publications: Publication[];
}

function PopupOverlay({ isOpen, onClose, publications }: PopupOverlayProps) {
  // Prevent background scrolling when the popup is open
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose} // Close popup when clicking on the background
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside the box
        className="bg-white rounded-lg w-full min-w-[300px] max-w-6xl mx-8 my-8 px-6 py-4 max-h-[80vh] overflow-hidden flex flex-col"
      >
        {/* Header section with title and close button */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-300">
          <h2 className="text-xl font-semibold">Search Results</h2>
          <button
            onClick={onClose} // Close button in the top right corner
            className="text-gray-600 hover:text-gray-800 text-xl font-bold"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Scrollable content area for publications */}
        <div className="overflow-y-auto flex-1 mt-4">
          {publications.length > 0 ? (
            <ul className="space-y-2">
              {publications.map((pub) => (
                <li key={pub.slug} className="border-b pb-2">
                  <a
                    href={pub.metadata.link} // Link to the publication
                    target="_blank" // Open link in new tab
                    rel="noopener noreferrer" // Security best practices
                    className="block cursor-pointer" // Full-width clickable area
                  >
                    <h3 className="font-semibold">{pub.metadata.title}</h3>
                    <p>{pub.metadata.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Move fetchMockData outside component and above it
async function fetchMockData(): Promise<APIObject> {
  return mockResearchData;
}

export default function ResearchPage() {
  const [data, setData] = useState<APIObject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Set the type of filteredPublications to Publication[]
  const [filteredPublications, setFilteredPublications] = useState<
    Publication[]
  >([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const [sidebarHeight, setSidebarHeight] = useState<number | null>(null); // State to store sidebar height

  // Create refs for each topic
  const topicRefs = useRef<(HTMLDivElement | null)[]>([]);
  const moreSectionRef = useRef<HTMLDivElement | null>(null); // Ref for the "More" section

  const headerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const headerInitialTop = useRef<number | null>(null);
  const sidebarInitialTop = useRef<number | null>(null);
  const sidebarWidth = useRef<number | null>(null);

  // Function to calculate initial positions of header and sidebar
  const updateInitialPositions = () => {
    if (headerRef.current && sidebarRef.current) {
      const scrollY = window.scrollY;

      // Get the initial positions without scrolling to top
      const headerRect = headerRef.current.getBoundingClientRect();
      const sidebarRect = sidebarRef.current.getBoundingClientRect();

      headerInitialTop.current = headerRect.top + scrollY;
      sidebarInitialTop.current = sidebarRect.top + scrollY;
      sidebarWidth.current = sidebarRef.current.offsetWidth;

      setIsHeaderFixed(scrollY > (headerInitialTop.current || 0));
      setIsSidebarFixed(scrollY > (sidebarInitialTop.current || 0));
      setIsInitialized(true);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchMockData(); // Call the fetchMockData function
        setData(result);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    setIsInitialized(false);
  }, []);

  // Initialize measurements after data is loaded
  useEffect(() => {
    if (!loading && data && !isInitialized) {
      const initTimer = setTimeout(() => {
        updateInitialPositions();
      }, 100); // Small delay to ensure DOM is ready

      return () => clearTimeout(initTimer);
    }
  }, [loading, data, isInitialized]);

  // Track the height of the main content and update sidebar height
  useEffect(() => {
    if (mainContentRef.current) {
      const mainContentHeight = mainContentRef.current.offsetHeight;
      setSidebarHeight(mainContentHeight); // Set sidebar height to match main content
    }
  }, [data]); // Triggered when data changes and component is re-rendered

  // Scroll and resize handling
  useEffect(() => {
    if (!isInitialized) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (sidebarInitialTop.current !== null) {
        const shouldFixSidebar =
          scrollPosition > sidebarInitialTop.current - 20; // Added offset for smoother transition
        setIsSidebarFixed(shouldFixSidebar);
      }

      if (headerInitialTop.current !== null) {
        setIsHeaderFixed(scrollPosition > headerInitialTop.current);
      }
    };

    const handleResize = () => {
      setIsInitialized(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isInitialized]);

  const scrollToTopic = (index: number) => {
    if (index === -1) {
      // Scroll to "More" section
      moreSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Scroll to specified topic
      topicRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSearch = () => {
    const allPublications =
      data?.object.flatMap((topic) => topic.metadata.publications) || [];
    const filtered = allPublications.filter((pub) =>
      pub.metadata.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPublications(filtered);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;
  if (!data) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Popup Overlay */}
      <PopupOverlay
        isOpen={isPopupOpen}
        onClose={closePopup}
        publications={filteredPublications}
      />

      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div className="flex gap-8">
          <div
            style={{
              width: sidebarWidth.current || "16rem",
              flexShrink: 0,
              height: sidebarHeight || "auto",
              position: "relative", // Added to contain the fixed sidebar
            }}
          >
            {/* Search Bar */}
            <div
              style={{
                position: isSidebarFixed ? "sticky" : "relative",
                top: isHeaderFixed ? "5rem" : "1rem",
                width: sidebarWidth.current || "16rem",
              }}
            >
              <div className="relative flex items-center">
                {/* Input field with rounded shape */}
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search publications..."
                  className="flex-1 px-6 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />

                {/* Search button (magnifying glass icon) */}
                <button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700"
                >
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Sidebar Navigation */}
            <div
              ref={sidebarRef}
              className="w-64 bg-gray-50 shadow-md rounded-lg p-4 mt-4"
              style={{
                position: isSidebarFixed ? "sticky" : "relative",
                top: isHeaderFixed ? "5rem" : "1rem", // Adjust top spacing to match header
                width: sidebarWidth.current || "16rem",
              }}
            >
              <h2 className="text-xl font-semibold mb-4">Current Research</h2>
              <div className="space-y-3">
                {data.object.map((topic, index) => (
                  <button
                    key={topic.slug}
                    onClick={() =>
                      topic.slug === "More"
                        ? scrollToTopic(-1)
                        : scrollToTopic(index)
                    }
                    className="block w-full text-left px-3 py-2 text-lg hover:bg-gray-100 rounded-md transition-colors"
                  >
                    {topic.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div
            ref={mainContentRef}
            className="flex-1 min-w-0"
            style={{
              paddingTop: isHeaderFixed ? "5rem" : "1rem", // Adjust top spacing to match header
            }}
          >
            <div className="space-y-12">
              {data.object.map((topic, index) => {
                const highlights = topic.metadata.publications.filter(
                  (pub) => pub.metadata.isHighlight
                );
                const more = topic.metadata.publications.filter(
                  (pub) => !pub.metadata.isHighlight
                );

                if (topic.slug === "More") {
                  return (
                    <div key={topic.slug} ref={moreSectionRef} className="py-8">
                      <div className="px-4 mb-6">
                        <div className="bg-gray-100 rounded-lg p-8">
                          <h2 className="text-2xl font-semibold mb-4">
                            {topic.title}
                          </h2>
                        </div>
                      </div>
                      <div className="px-4 mb-6">
                        <More publications={more} />
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={topic.slug}
                    ref={(el) => (topicRefs.current[index] = el)}
                  >
                    <div className="px-4 mb-6">
                      <ResearchTopic
                        slug={topic.slug}
                        title={topic.title}
                        metadata={topic.metadata}
                      />
                    </div>
                    <div className="px-4 mb-6">
                      <Highlights publications={highlights} />
                    </div>
                    <div className="px-4 mb-6">
                      <More publications={more} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
