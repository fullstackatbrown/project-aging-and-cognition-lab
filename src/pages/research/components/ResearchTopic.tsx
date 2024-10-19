import React from "react";

interface ResearchTopicProps {
  title: string;
  blurb: string;
}

export default function ResearchTopic({ title, blurb }: ResearchTopicProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">{blurb}</p>
    </div>
  );
}
