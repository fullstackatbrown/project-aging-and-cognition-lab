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
    <div className="article">
      <h2>{headline}</h2>
      <p>{description}</p>
      <img src={picture} alt={headline} />
      <p>{`${date.day}/${date.month}/${date.year}`}</p>
      {/* <a href={link} target="_blank" rel="noopener noreferrer">Read more</a> */}
    </div>
  );
}
