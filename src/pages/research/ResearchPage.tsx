import React, { useEffect, useState, useRef } from "react";
// import { mockResearchData } from "../../mock/research_mock";
import ResearchTopic from "./components/ResearchTopic";
import Highlights from "./components/Highlights";
import More from "./components/More";
import { DataObject, Publication } from "./Interfaces";
import { Search } from "lucide-react"; // Import the Search icon from lucide-react
import { getPublicationData } from "../../cosmicAPI"; // Ensure this is the correct API import

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
      className="fixed inset-0 flex justify-center items-center z-50"
      style={{ backgroundColor: "rgba(0, 128, 128, 0.75)" }} // Use CSS variable for background color
    >
      <div
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside the box
        className="rounded-lg w-full min-w-[300px] max-w-6xl mx-8 my-8 px-6 py-4 max-h-[80vh] overflow-hidden flex flex-col"
        style={{ backgroundColor: "var(--off-white)" }} // Use CSS variable for background color
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
            <ul className="space-y-4">
              {publications.map((pub) => (
                <li
                  key={pub.slug}
                  className="p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  style={{ backgroundColor: "var(--off-white)" }} // Ensure the background is off-white
                >
                  <a
                    href={pub.metadata.link} // Link to the publication
                    target="_blank" // Open link in new tab
                    rel="noopener noreferrer" // Security best practices
                    className="block cursor-pointer"
                  >
                    <h3 className="font-semibold text-lg mb-2">
                      {pub.metadata.title}
                    </h3>
                    <p className="text-gray-700">{pub.metadata.description}</p>
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
// async function fetchMockData(): Promise<APIObject> {
//   return mockResearchData;
// }

export default function ResearchPage() {
  const [data, setData] = useState<DataObject[] | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Set the type of filteredPublications to Publication[]
  const [filteredPublications, setFilteredPublications] = useState<
    Publication[]
  >([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [sidebarHeight, setSidebarHeight] = useState<number | null>(null);

  // Create refs for each topic
  const topicRefs = useRef<(HTMLDivElement | null)[]>([]);
  const moreSectionRef = useRef<HTMLDivElement | null>(null); // Ref for the "More" section

  const sidebarRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  // New state for sidebar position tracking
  const [isFixed, setIsFixed] = useState(false);
  const [sidebarTop, setSidebarTop] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getPublicationData(); // Call the fetchMockData function
        const topics = result.object.metadata.topics_array as DataObject[];

        setData(topics);
        console.log(result);
        console.log(topics);
        console.log(data);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    // Get initial sidebar position
    const updateSidebarPosition = () => {
      if (sidebarRef.current) {
        const rect = sidebarRef.current.getBoundingClientRect();
        setSidebarTop(rect.top + window.scrollY);
      }
    };

    // Update sidebar position after content loads
    const timer = setTimeout(updateSidebarPosition, 100);
    return () => clearTimeout(timer);
  }, []);

  // Initialize measurements after data is loaded
  useEffect(() => {
    const handleScroll = () => {
      if (sidebarTop) {
        setIsFixed(window.scrollY > sidebarTop);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sidebarTop]);

  // Track the height of the main content and update sidebar height
  useEffect(() => {
    if (mainContentRef.current) {
      const mainContentHeight = mainContentRef.current.offsetHeight;
      setSidebarHeight(mainContentHeight); // Set sidebar height to match main content
    }
  }, [data]); // Triggered when data changes and component is re-rendered

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
      data?.flatMap((topic) => topic.metadata.publications) || [];
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
      <PopupOverlay
        isOpen={isPopupOpen}
        onClose={closePopup}
        publications={filteredPublications}
      />

      <div className="max-w-7xl mx-auto px-4 pt-4">
        <div className="flex gap-8">
          {/* Sidebar Container */}
          <div
            style={{
              width: "16rem",
              flexShrink: 0,
              height: sidebarHeight || "auto",
              position: "relative",
            }}
          >
            {/* Sidebar Content */}
            <div
              ref={sidebarRef}
              className="w-72 pl-5"
              style={{
                position: isFixed ? "fixed" : "static",
                top: isFixed ? "20px" : "auto",
                width: "16rem",
                transition: "all 0.3s ease",
              }}
            >
              {/* Search Bar */}
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Publications"
                    style={{
                      // "--tw-ring-color": "var(--base-teal)",
                      borderColor: "var(--base-teal)",
                      color: "var(--dark-teal)",
                    }}
                    className="w-full px-6 py-2 rounded-full border-2 placeholder-teal-600 focus:outline-none focus:ring-2 focus:border-transparent"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                  />
                  <button
                    onClick={handleSearch}
                    style={{ color: "var(--base-teal)" }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:opacity-80"
                  >
                    <Search size={20} />
                  </button>
                </div>
              </div>

              {/* Navigation Section */}
              <div className="space-y-2 flex flex-col items-center">
                {/* Current Research Header */}
                <h3 className="text-[#327475] font-semibold italic mb-[0px]">
                  Current Research
                </h3>
                {/* Navigation Items */}
                {data.map((topic, index) => (
                  <button
                    key={topic.slug}
                    onClick={() =>
                      topic.slug === "More"
                        ? scrollToTopic(-1)
                        : scrollToTopic(index)
                    }
                    className="w-full rounded-lg bg-gray-100 p-4 text-left hover:bg-gray-200 transition-colors border-gray-100"
                  >
                    <span
                      style={{ color: "var(--base-teal)" }}
                      className="text-lg"
                    >
                      {topic.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div ref={mainContentRef} className="">
            <div className="space-y-12">
              {data?.map((topic, index) => {
                topic.metadata.publications.forEach((pub, idx) => {
                  console.log(`Publication ${idx + 1}:`, pub);
                });

                const highlights = topic.metadata.publications.filter(
                  (pub) => pub.metadata?.ishighlight === "true"
                );

                const more = topic.metadata.publications.filter(
                  (pub) => pub.metadata?.ishighlight === "false"
                );

                if (topic.slug === "more") {
                  return (
                    <div key={topic.slug} ref={moreSectionRef} className="pb-8">
                      <div className="px-4 mb-6">
                        <div>
                          <div>
                            <h3
                              className="text-center text-3xl font-semibold mb-4"
                              style={{ color: "black" }}
                            >
                              Other Publications
                            </h3>
                          </div>
                          <div
                            className="rounded-lg p-6"
                            style={{ backgroundColor: "var(--base-teal)" }}
                          >
                            <div className="space-y-6">
                              {more.map((pub) => (
                                <a
                                  key={pub.slug}
                                  href={pub.metadata.link} // Link to the publication
                                  target="_blank" // Open link in new tab
                                  rel="noopener noreferrer" // Security best practices
                                  className="block bg-white rounded-lg p-6 cursor-pointer" // Block makes it occupy full width
                                >
                                  <h4 className="text-lg font-semibold mb-2">
                                    {pub.metadata.title}
                                  </h4>
                                  <p className="text-gray-600">
                                    {pub.metadata.description}
                                  </p>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={topic.slug}
                    ref={(el) => (topicRefs.current[index] = el)}
                  >
                    <div className="mx-6 mb-12">
                      <ResearchTopic
                        slug={topic.slug}
                        title={topic.title}
                        metadata={topic.metadata}
                      />
                    </div>
                    <div className="mx-6 my-12">
                      <Highlights publications={highlights} />
                    </div>
                    <div className="mx-6 my-12">
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
