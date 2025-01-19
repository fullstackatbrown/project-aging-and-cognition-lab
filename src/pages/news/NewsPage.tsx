import { useEffect, useState } from "react";
import "./article.css";
import mockNewsData from "../../mock/mock_news_data.json";
import Article from "../../components/Article";
import { getNewsData } from "../../cosmicAPI";

// increase the side margins

interface APIObject {
  object: {
    slug: string;
    title: string;
    type: string;
    metadata: {
      heading: string;
      image: Image;
      articles: ArticleData[];
    };
  };
}

interface Image {
  url: string;
  imgix_url: string;
}

interface ArticleData {
  id: string;
  slug: string;
  title: string;
  status: string;
  type: string;
  content: string;
  created_at: string;
  published_at: string;
  metadata: {
    headline: string;
    description: string;
    date: string;
    link: string;
    picture: {
      url: string;
      imgix_url: string;
    };
  };
}

function NewsPage() {
  const [data, setData] = useState<APIObject | undefined>();
  // function fetchMockData(): APIObject {
  //   return mockNewsData as APIObject;
  // }
  const articlesPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const newsdata = await getNewsData(); // Call the fetchMockData function
        // const topics =result.object.metadata.topics_array as DataObject[];

        setData(newsdata);

        console.log(data);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  /* move to the next page */
  const handleNextPage = () => {
    if (
      data &&
      currentPage <
        Math.ceil(data.object.metadata.articles.length / articlesPerPage)
    ) {
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
    return data.object.metadata.articles.slice(startIndex, endIndex);
  };

  return (
    <div className="flex flex-col my-10 mx-10 md:mx-20 lg:mx-32">
      <div>
        <h1
          className="text-5xl mx-4 mb-[-10px] mt-6 font-bold"
          style={{ color: "#327575" }}
        >
          News
        </h1>
      </div>
      <div>
        {data ? (
          <>
            {/* <h2>{data.object.metadata.heading}</h2> */}
            <div className="flex flex-col my-4 mx-4 md:mx-10 items-center">
              {getCurrentPageArticles().map((article, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-full"
                  style={{ position: "relative" }}
                >
                  <div
                    className="flex items-center justify-between w-full"
                    style={{ height: "auto" }}
                  >
                    <Article
                      headline={article.metadata.headline}
                      description={article.metadata.description}
                      date={article.metadata.date}
                      picture={article.metadata.picture.url}
                      link={article.metadata.link}
                    />
                  </div>

                  {/* divider line */}
                  {index !== getCurrentPageArticles().length - 1 && (
                    <hr
                      style={{
                        backgroundColor: "#E3C6B1",
                        height: "1px",
                        border: "none",
                        width: "100%",
                        margin: "20px 0",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* buttons to move between pages of news articles */}
            <div className="flex justify-center mt-5 space-x-5 md:space-x-10">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="p-2 text-white rounded disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#327575"
                  className="size-12"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>

              <button
                onClick={handleNextPage}
                disabled={
                  data &&
                  currentPage >=
                    Math.ceil(
                      data.object.metadata.articles.length / articlesPerPage
                    )
                }
                className="p-2 text-white rounded disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#327575"
                  className="size-12"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clip-rule="evenodd"
                  />
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
