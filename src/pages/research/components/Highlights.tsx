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
    <div className="bg-gray-100 rounded-lg p-8">
      <h3 className="text-2xl font-semibold mb-6">Highlights</h3>
      <div className="flex gap-8 bg-gray-200 rounded-lg p-8">
        <div className="w-48 h-48 flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="images/placeholder.jpeg"
            alt="hello"
          ></img>
        </div>
        <div className="flex-1 py-2">
          {" "}
          <h4 className="text-xl font-semibold mb-3">{highlightTitle}</h4>{" "}
          <p className="text-gray-600 text-lg">{highlightInfo}</p>{" "}
        </div>
      </div>
    </div>
  );
}
