import React from "react";
import "../pages/news/article.css";

interface ArticleProps {
  headline: string;
  description: string;
  date: string;
  picture: string;
  link: string;
}

function parseDate(dateString: string) {
  try {
    const date = new Date(dateString);

    // Create formatters
    const dayFormatter = new Intl.DateTimeFormat("en-US", { day: "numeric" });
    const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "short" });
    const yearFormatter = new Intl.DateTimeFormat("en-US", { year: "numeric" });

    return {
      day: dayFormatter.format(date),
      month: monthFormatter.format(date),
      year: yearFormatter.format(date),
    };
  } catch (error) {
    console.error("Invalid date format:", dateString);
    return {
      day: "--",
      month: "Invalid",
      year: "----",
    };
  }
}

export default function Article({
  headline,
  description,
  date,
  picture,
  link,
}: ArticleProps) {
  const formattedDate = parseDate(date);

  return (
    <div className="article flex flex-col md:flex-row md:items-center md:items-start sm:items-start sm:my-3 md:my-5 md:space-x-8 space-y-5 md:space-y-0">
      {/* date */}
      <div
        className="flex sm:flex-row md:flex-col space-x-1.5 md:space-x-0 md:space-y-1"
        style={{ width: "120px", flexShrink: 0 }}
      >
        <p
          className="text-2xl md:text-5xl sm:text-2xl lg:text-5xl font-normal md:font-bold"
          style={{ color: "#327575" }}
        >
          {formattedDate.day}
        </p>
        <p
          className="text-2xl leading-1 font-normal"
          style={{ color: "#327575" }}
        >
          {formattedDate.month}
        </p>
        <p
          className="text-2xl leading-1 font-normal"
          style={{ color: "#327575" }}
        >
          {formattedDate.year}
        </p>
      </div>

      {/* image */}
      <div
        className="flex flex-shrink sm:flex-start align-middle flex-center"
        style={{
          width: "159px",
          height: "139px",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
        }}
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
          <div className="flex flex-col space-y-1 md:space-y-1">
            <h2 className="text-xl md:text-2xl" style={{ color: "#51AAAB" }}>
              {headline}
            </h2>
            <p className="text-base md:text-lg leading-5">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
