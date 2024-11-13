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
    <div className="article flex flex-col lg:flex-row items-start md:mx-5 mx-10 space-y-5 md:space-y-8 lg:space-x-8 sm:mt-6 sm:mb-6 md:mt-12 md:mb-12">
      {/* date */}
      <div className="flex sm:flex-row md:flex-row lg:flex-col space-x-1.5 lg:space-y-1">
        <p className="text-2xl lg:text-5xl lg:font-bold" style={{ color: "#D55E36" }}>
          {date.day}
        </p>
        <p className="text-2xl leading-tight" style={{ color: "#D55E36" }}>
          {date.month}
        </p>
        <p className="text-2xl leading-tight" style={{ color: "#D55E36" }}>
          {date.year}
        </p>
      </div>

      {/* image */}
      <div
        className="flex flex-shrink sm:flex-start"
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
      <div className="text-container">
        <div className="flex flex-col md:flex-row lg:flex-col space-x-0  space-y-5">
          <div className="flex flex-col justify-center space-y-6">
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
