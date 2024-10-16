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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="Research Page">
      <h1>Research & Publications</h1>
      {data && (
        <>
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
        </>
      )}
    </div>
  );
}
