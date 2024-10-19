import React from "react";

interface ResearchTopicsProps {
  title: string;
  blurb: string;
}

export default function ResearchTopics({ title, blurb }: ResearchTopicsProps) {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{title}</h2>
      <p>{blurb}</p>
    </div>
  );
}
