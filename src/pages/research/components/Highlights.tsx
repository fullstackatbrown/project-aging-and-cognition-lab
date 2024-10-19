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
      <div className="flex gap-6 bg-gray-200 rounded-lg p-6">
        {/* Placeholder for the image */}
        <div className="w-32 h-32 flex-shrink-0 border-2 border-gray-300 flex items-center justify-center">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="src/pages/research/images/placeholder.jpeg"
            alt="hello"
          ></img>
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-2">{highlightTitle}</h4>
          <p className="text-gray-600">{highlightInfo}</p>
        </div>
      </div>
    </div>
  );
}
