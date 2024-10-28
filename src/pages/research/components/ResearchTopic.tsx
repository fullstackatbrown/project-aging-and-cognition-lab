import React from "react";
import { ResearchTopicProps } from "../Interfaces";

export default function ResearchTopic({ title, metadata }: ResearchTopicProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">{metadata.description}</p>
    </div>
  );
}
