import React from "react";
import { HighlightsProps } from "../Interfaces";

export default function Highlights({ publications }: HighlightsProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-8">
      <h3 className="text-2xl font-semibold mb-6">Highlights</h3>
      {publications.map((pub) => (
        <a
          key={pub.slug}
          href={pub.metadata.link} // Link to the publication
          target="_blank" // Open link in new tab
          rel="noopener noreferrer" // Security best practices
          className="flex gap-8 bg-gray-200 rounded-lg p-8 mb-4 cursor-pointer" // Full-width clickable area
        >
          <div className="w-48 h-48 flex-shrink-0">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={pub.metadata.image} // Assuming you want to use the publication image
              alt={pub.metadata.title}
            />
          </div>
          <div className="flex-1 py-2">
            <h4 className="text-xl font-semibold mb-3">{pub.metadata.title}</h4>
            <p className="text-gray-600 text-lg">{pub.metadata.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
