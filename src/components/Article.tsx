import React from 'react';
import '../pages/news/article.css';

interface ArticleProps {
  headline: string;
  description: string;
  date: {
    day: string;
    month: string;
    year: string;
  };
  picture: string;
  link: string;
}
export default function Article({ headline, description, date, picture, link }: ArticleProps) {
  return (
    <div className="article flex flex-col md:flex-row md:items-center md:items-start sm:items-start sm:mt-6 sm:mb-6 md:mt-12 md:mb-12 md:space-x-8 space-y-5 md:space-y-0">
      {/* date */}
      <div className="flex sm:flex-row md:flex-col space-x-1.5 md:space-x-0 md:space-y-1">
        <p className="text-2xl md:text-5xl sm:text-2xl lg:text-5xl font-normal md:font-bold" style={{ color: "#D55E36" }}>
          {date.day}
        </p>
        <p className="text-2xl leading-1 font-normal" style={{ color: "#D55E36" }}>
          {date.month}
        </p>
        <p className="text-2xl leading-1 font-normal" style={{ color: "#D55E36" }}>
          {date.year}
        </p>
      </div>

      {/* image */}
      <div
        className="flex flex-shrink sm:flex-start align-middle flex-center"
        style={{ width: "159px", height: "139px", flexShrink: 0, display: "flex", alignItems: "center" }}
      >
        <img
          src={picture}
          alt={headline}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>

      {/* headline and description */}
      <div className="text-container align-middle">
        <div className="flex flex-col space-x-0">
          <div className="flex flex-col space-y-3 md:space-y-6">
            <h2 className="text-xl md:text-2xl" style={{ color: "#D55E36" }}>
              {headline}
            </h2>
            <p className="text-base md:text-lg leading-5">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
