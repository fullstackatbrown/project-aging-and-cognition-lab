import React from "react";
import { ResearchTopicProps } from "../Interfaces";

export default function ResearchTopic({ title, metadata }: ResearchTopicProps) {
  return (
    <div className="rounded-lg">
      <h2
        className="text-left text-3xl font-semibold mb-5"
        style={{ color: "black" }}
      >
        {title}
      </h2>
      <p className="text-gray-600">{metadata.description}</p>
    </div>
  );
}
