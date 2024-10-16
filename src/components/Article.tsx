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
    <div className="article flex flex-row mx-10 justify-start">
      <div className="flex flex-col m-auto mx-5">
        <p className="text-4xl font-bold">{date.day}</p>
        <p>{date.month}</p>
        <p>{date.year}</p>
      </div>
      <img src={picture} alt={headline} className="flex m-auto size-40 mx-0"/>

      <div className="flex flex-col m-auto mx-10 space-y-5">
        <h2>{headline}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  );
}
