import React from "react";
import { HighlightsProps } from "../Interfaces";

export default function Highlights({ publications }: HighlightsProps) {
  return (
    <div className="rounded-lg">
      <h3
        className="text-2xl font-semibold mb-6"
        style={{ color: "var(--dark-teal)" }}
      >
        Highlights
      </h3>
      {publications.map((pub) => (
        <a
          key={pub.slug}
          href={pub.metadata.link} // Link to the publication
          target="_blank" // Open link in new tab
          rel="noopener noreferrer" // Security best practices
          className="flex gap-8 rounded-lg mb-4 cursor-pointer items-start" // Full-width clickable area
        >
          <div className="w-48 h-48 flex-shrink-0 py-3">
            <img
              className="object-cover rounded-lg"
              src={pub.metadata.image.url} // Assuming you want to use the publication image
              alt={pub.metadata.title}
            />
          </div>
          <div className="flex-1 py-2">
            <h2
              className="text-xl font-semibold mb-3"
              style={{ color: "var(--base-teal)" }}
            >
              {pub.metadata.title}
            </h2>
            <p className="text-gray-600 text-lg">{pub.metadata.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
