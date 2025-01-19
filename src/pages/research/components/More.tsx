import React from "react";
import { MoreProps } from "../Interfaces";

export default function More({ publications }: MoreProps) {
  return (
    <div className="mt-[-20px]">
      <div>
        <h3
          className="text-[28px] italic font-semibold mb-3"
          style={{ color: "var(--dark-teal)" }}
        >
          More on this Topic
        </h3>
      </div>
      <div
        className="rounded-lg p-6"
        style={{ backgroundColor: "var(--base-teal)" }}
      >
        <div className="space-y-6">
          {publications.map((pub) => (
            <a
              key={pub.slug}
              href={pub.metadata.link} // Link to the publication
              target="_blank" // Open link in new tab
              rel="noopener noreferrer" // Security best practices
              className="block bg-white rounded-lg p-6 cursor-pointer" // Block makes it occupy full width
            >
              <h4 className="text-lg font-semibold mb-2">
                {pub.metadata.title}
              </h4>
              <p className="text-gray-600">{pub.metadata.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
