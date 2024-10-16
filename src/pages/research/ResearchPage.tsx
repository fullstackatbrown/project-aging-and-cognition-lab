import React from "react";
import { useEffect, useState } from "react";
import { mockResearchData } from "../../mock/research_mock";

export default function ResearchPage() {
  const [data, setData] = useState<APIObject>();

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

  async function fetchMockData() {
    return mockResearchData;
  }

  return <div>Research & Publications</div>;
}
