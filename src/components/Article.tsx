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
    <div className="article flex flex-col md:flex-row mx-5 md:mx-10 justify-center md:justify-start items-center md:items-start space-y-5 md:space-y-0">
      <div className="flex flex-col items-center md:items-start md:m-auto md:mx-5">
      <p className="text-3xl md:text-4xl font-bold">{date.day}</p>
        <p>{date.month}</p>
        <p>{date.year}</p>
      </div>
      <img src={picture} alt={headline} className="w-40 h-40 md:w-60 md:h-60 object-cover mx-auto md:mx-0" />

      <div className="flex flex-col text-center md:text-left md:m-auto md:mx-10 space-y-3 md:space-y-5">
        <h2 className="text-xl md:text-2xl">{headline}</h2>
        <h3 className="text-base md:text-lg">{description}</h3>
      </div>
    </div>
  );
}

