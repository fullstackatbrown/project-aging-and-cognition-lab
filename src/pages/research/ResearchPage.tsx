import React, { useEffect, useState } from "react";
import { mockResearchData } from "../../mock/research_mock";
import ResearchTopic from "./components/ResearchTopic";
import Highlights from "./components/Highlights";
import More from "./components/More";

interface APIObject {
  object: DataObject;
}

interface DataObject {
  slug: string;
  title: string;
  metadata: Metadata;
}

interface Metadata {
  heading: string;
  blurb: string;
  highlight_title: string;
  highlight_info: string;
  more_title1: string;
  more_info1: string;
  more_title2: string;
  more_info2: string;
}

export default function ResearchPage() {
  const [data, setData] = useState<APIObject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState("Topic One");

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

  async function fetchMockData(): Promise<APIObject> {
    return mockResearchData;
  }

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;
  if (!data) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Research & Publications</h1>

      <div className="flex gap-8">
        {/* Sidebar Navigation? */}
        <div className="w-64 flex-shrink-0">
          <h2 className="text-xl font-semibold mb-4">Current Research</h2>
          <div className="space-y-3">
            {["Topic One", "Topic Two", "Topic Three"].map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`block text-lg hover:underline ${
                  selectedTopic === topic ? "font-semibold" : ""
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Current Research Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Current Research</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gray-200 h-48 rounded-lg"></div>
              <div className="bg-gray-200 h-48 rounded-lg"></div>
              <div className="bg-gray-200 h-48 rounded-lg"></div>
            </div>
          </div>

          {/* Topic Content */}
          <div className="space-y-12">
            <ResearchTopic
              title={data.object.metadata.heading}
              blurb={data.object.metadata.blurb}
            />

            <Highlights
              highlightTitle={data.object.metadata.highlight_title}
              highlightInfo={data.object.metadata.highlight_info}
            />

            <More
              moreTitle1={data.object.metadata.more_title1}
              moreInfo1={data.object.metadata.more_info1}
              moreTitle2={data.object.metadata.more_title2}
              moreInfo2={data.object.metadata.more_info2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
