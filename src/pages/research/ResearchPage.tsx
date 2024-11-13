import React, { useEffect, useState, useRef } from "react";
import { mockResearchData } from "../../mock/research_mock";
import ResearchTopic from "./components/ResearchTopic";
import Highlights from "./components/Highlights";
import More from "./components/More";
import { APIObject, Publication } from "./Interfaces";

// Define the prop types for PopupOverlay
interface PopupOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  publications: Publication[];
}

// Popup overlay component
function PopupOverlay({ isOpen, onClose, publications }: PopupOverlayProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-xl font-semibold mb-4">Search Results</h2>
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
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Close
        </button>
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

  // Create refs for each topic
  const topicRefs = useRef<(HTMLDivElement | null)[]>([]);

  const headerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const headerInitialTop = useRef<number | null>(null);
  const sidebarInitialTop = useRef<number | null>(null);
  const sidebarWidth = useRef<number | null>(null);

  // Update initial positions
  const updateInitialPositions = () => {
    if (headerRef.current && sidebarRef.current) {
      const scrollY = window.scrollY;

      // Reset to get true position of sidebar + searchbar
      window.scrollTo(0, 0);

      // Get positions
      headerInitialTop.current = headerRef.current.getBoundingClientRect().top;
      sidebarInitialTop.current =
        sidebarRef.current.getBoundingClientRect().top;
      sidebarWidth.current = sidebarRef.current.offsetWidth;

      // Restore scroll
      window.scrollTo(0, scrollY);

      // Update fixed states based on current scroll position
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
      const initTimer = requestAnimationFrame(() => {
        updateInitialPositions();
      });

      return () => cancelAnimationFrame(initTimer);
    }
  }, [loading, data, isInitialized]);

  // Scroll and resize handling
  useEffect(() => {
    if (!isInitialized) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (headerInitialTop.current !== null) {
        setIsHeaderFixed(scrollPosition > headerInitialTop.current);
      }
      if (sidebarInitialTop.current !== null) {
        setIsSidebarFixed(scrollPosition > sidebarInitialTop.current);
      }
    };

    const handleResize = () => {
      // Reset initialization to force recalculation
      setIsInitialized(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isInitialized]);

  const scrollToTopic = (index: number) => {
    topicRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
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

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;
  if (!data) return null;

  return (
    <div className="min-h-screen bg-white">
      {isHeaderFixed && (
        <div style={{ height: headerRef.current?.offsetHeight }} />
      )}
      <div
        ref={headerRef}
        className={`bg-white z-10 border-b transition-all duration-300 ${
          isHeaderFixed ? "fixed top-0 left-0 right-0" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Research & Publications</h1>
            <div className="flex">
              <input
                type="text"
                placeholder="Search publications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border rounded-l-md px-4 py-2"
              />
              <button
                onClick={handleSearch}
                className="bg-blue-500 text-white rounded-r-md px-4 py-2"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Overlay for search results */}
      <PopupOverlay
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        publications={filteredPublications}
      />

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-8 pt-24">
          <div
            style={{ width: sidebarWidth.current || "16rem", flexShrink: 0 }}
          >
            {/* Sidebar Navigation */}
            <div
              ref={sidebarRef}
              className={`w-64 bg-gray-50 shadow-md rounded-lg p-4 transition-all duration-300 ease-in-out ${
                isSidebarFixed ? "fixed" : "relative"
              }`}
              style={{
                ...{
                  transform: isSidebarFixed
                    ? `translateY(${isHeaderFixed ? "5rem" : "1rem"})`
                    : "none",
                },
                top: 0,
              }}
            >
              <h2 className="text-xl font-semibold mb-4">Current Research</h2>
              <div className="space-y-3">
                {data.object.map((topic, index) => (
                  <button
                    key={topic.slug}
                    onClick={() => scrollToTopic(index)} // Scroll to the respective topic
                    className="block w-full text-left px-3 py-2 text-lg hover:bg-gray-100 rounded-md transition-colors"
                  >
                    {topic.title} {/* Display topic title from mock data */}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div ref={mainContentRef} className="flex-1 min-w-0">
            {/* Loop through each topic to display its content */}
            <div className="space-y-12">
              {data.object.map((topic, index) => {
                const highlights = topic.metadata.publications.filter(
                  (pub) => pub.metadata.isHighlight
                );
                const more = topic.metadata.publications.filter(
                  (pub) => !pub.metadata.isHighlight
                );

                return (
                  <div
                    key={topic.slug}
                    ref={(el) => (topicRefs.current[index] = el)}
                    className="py-8"
                  >
                    {/* Display Topic Description */}
                    <div className="px-4 mb-6">
                      <ResearchTopic
                        slug={topic.slug}
                        title={topic.title}
                        metadata={topic.metadata}
                      />
                    </div>
                    {/* Display Highlights */}
                    <div className="px-4 mb-6">
                      <Highlights publications={highlights} />
                    </div>
                    {/* Display More Publications */}
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
