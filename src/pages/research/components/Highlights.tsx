import React from "react";

interface HighlightsProps {
  highlightTitle: string;
  highlightInfo: string;
}

export default function Highlights({
  highlightTitle,
  highlightInfo,
}: HighlightsProps) {
  return (
    <div className="highlights-section">
      <h3>Highlights</h3>
      <div className="highlight-box">
        {/* Placeholder for the image */}
        <div className="highlight-image">
          <img src="../images/placeholder.jpg" alt="Highlight" />
        </div>
        <div className="highlight-content">
          <h4>{highlightTitle}</h4>
          <p>{highlightInfo}</p>
        </div>
      </div>
    </div>
  );
}
