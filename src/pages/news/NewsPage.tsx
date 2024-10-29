import { useEffect, useState } from 'react';
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
  const articlesPerPage = 5; 
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const jsonData = fetchMockData();
    setData(jsonData);
  }, []);

  /* move to the next page */
  const handleNextPage = () => {
    if (data && currentPage < Math.ceil(data.articles.length / articlesPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  /* back to the previous page */
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  /* select the [5] articles for each page */
  const getCurrentPageArticles = () => {
    if (!data) return [];
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    return data.articles.slice(startIndex, endIndex);
  };

  return (
    <div className="flex flex-col my-10 mx-10 md:mx-20 lg:mx-32">
      <div>
        <h1 className="text-3xl md:text-4xl">News</h1>
      </div>
      <div>
        {data ? (
          <>
            {/* <h2>{data.object.metadata.heading}</h2> */}
            <div className="flex flex-col space-y-8 my-5 items-center sm:space-y-10">
              {getCurrentPageArticles().map((article, index) => (
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
            {/* add buttons to move between pages of news articles */}
            <div className="flex justify-center mt-5 space-x-5 md:space-x-10">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="p-2 text-white rounded disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-12">
                  <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
                </svg>
              </button>

              <button
                onClick={handleNextPage}
                disabled={data && currentPage >= Math.ceil(data.articles.length / articlesPerPage)}
                className="p-2 text-white rounded disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="size-12">
                <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
              </svg>
              </button>
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