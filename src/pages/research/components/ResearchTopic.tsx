import React from "react";
import { ResearchTopicProps } from "../Interfaces";

export default function ResearchTopic({ title, metadata }: ResearchTopicProps) {
  return (
    <div className="rounded-lg">
      <h2
        className="text-center text-2xl font-semibold"
        style={{ color: "var(--dark-teal)" }}
      >
        {title}
      </h2>
      <p className="text-gray-600">{metadata.description}</p>
    </div>
  );
}
