import React from "react";
import { MoreProps } from "../Interfaces";

export default function More({ publications }: MoreProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-8">
      <h3 className="text-2xl font-semibold mb-6">More</h3>
      <div className="space-y-4">
        {publications.map((pub) => (
          <a
            key={pub.slug}
            href={pub.metadata.link} // Link to the publication
            target="_blank" // Open link in new tab
            rel="noopener noreferrer" // Security best practices
            className="block bg-gray-200 rounded-lg p-6 cursor-pointer" // Block makes it occupy full width
          >
            <h4 className="text-lg font-semibold mb-2">{pub.metadata.title}</h4>
            <p className="text-gray-600">{pub.metadata.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
