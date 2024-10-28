import React, { useEffect, useState, useRef } from "react";
import { mockResearchData } from "../../mock/research_mock";
import ResearchTopic from "./components/ResearchTopic";
import Highlights from "./components/Highlights";
import More from "./components/More";
import { APIObject } from "./Interfaces";

// Move fetchMockData outside component and above it
async function fetchMockData(): Promise<APIObject> {
  return mockResearchData;
}

export default function ResearchPage() {
  const [data, setData] = useState<APIObject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Create refs for each topic
  const topicRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchMockData();
        setData(result);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const scrollToTopic = (index: number) => {
    topicRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;
  if (!data) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Research & Publications</h1>

      <div className="flex gap-8">
        {/* Sidebar Navigation */}
        <div className="w-64 h-screen sticky top-16 bg-gray-50 shadow-md overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Current Research</h2>
          <div className="space-y-3">
            {data.object.map((topic, index) => (
              <button
                key={topic.slug}
                onClick={() => scrollToTopic(index)} // Scroll to the respective topic
                className="block text-lg hover:underline"
              >
                {topic.title} {/* Display topic title from mock data */}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div
          className="flex-1 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 120px)" }}
        >
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
  );
}
