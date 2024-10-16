import { useEffect, useState } from 'react';
import './news.css';
import './article.css';
import mockNewsData from '../../mock/mock_news_data.json';
import Article from '../../components/Article';

interface APIObject {
  object: DataObject;
  articles: ArticleData[];
}

interface DataObject {
  slug: string;
  title: string;
  metadata: Metadata;
}

interface Metadata {
  heading: string;
  image: Image;
}

interface Image {
  url: string;
  imgix_url: string;
}

interface ArticleData {
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

function NewsPage() {
  const [data, setData] = useState<APIObject | undefined>();
  function fetchMockData(): APIObject {
    return mockNewsData as APIObject;
  }

  useEffect(() => {
    const jsonData = fetchMockData();
    setData(jsonData);
  }, []);

  return (
    <div className="news">
      <div>
        <h1 className="news-header">News</h1>
      </div>
      <div>
        {data ? (
          <>
            {/* <h2>{data.object.metadata.heading}</h2> */}
            <div className="articles-list">
              {data.articles.map((article, index) => (
                <Article
                  key={index}
                  headline={article.headline}
                  description={article.description}
                  date={article.date}
                  picture={article.picture}
                  link={article.link}
                />
              ))}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default NewsPage;
