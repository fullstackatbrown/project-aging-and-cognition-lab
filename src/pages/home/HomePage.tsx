import React from "react";
import { useEffect, useState } from "react";
import { mockHomeData } from "../../mock/example_mock_data";
import HomeResearchPrev from "../../components/HomeResearchPrev";
import Publication from "../../components/Publication";
import Button from "../../components/Button";
// make the image span the whole page

interface APIObject {
  object: DataObject;
}

interface Publication {
  title: string;
  authors: string;
  journal: string;
  date: string;
}

interface DataObject {
  slug: string;
  title: string;
  metadata: Metadata;
}

interface News {
  title: string;
  image: string;
}

interface Metadata {
  heading: string;
  subheading: string;
  location: string;
  phone: string;
  email: string;
  hours: string;
  image: Image;
  publications: Publication[];
  news: News[]
}

interface Image {
  url: string;
  imgix_url: string;
}

export default function HomePage() {
  const [data, setData] = useState<APIObject>();
  const [newsIndex, setNewsIndex] = useState(0);
  async function fetchMockData() {
    return mockHomeData;
  }

  async function fetchData() {
    //this would be the actual call to the API where we input our query and get the response back.
  }

  useEffect(() => {
    //here we are mocking the API call
    fetchMockData()
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.log("Error fetching the data:", error);
        //error handle on the front end
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNewsIndex((prevIndex) => (data?.object.metadata.news ? (prevIndex + 1) % data.object.metadata.news.length : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [data]);

  return (
      <div
          className="App bg-white min-h-screen flex flex-col items-center text-gray-800 font-sans">
        <div>
          {data ? (
              <>
                <div className="my-8"><a href="join">
                  <Button text="Join Us" className=" mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"/>
                </a></div>

                {/* Hero Section */}
                <div className="w-full bg-cover bg-center rounded-3xl my-4"
                     style={{backgroundImage: `url(${data.object.metadata.image.url})`}}>
                  <div
                      className="w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-48 rounded-3xl">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">{data.object.metadata.heading}</h1>
                    <p className="text-lg sm:text-2xl">{data.object.metadata.subheading}</p>
                  </div>
                </div>  

                <div className="w-full bg-gradient-to-b from-cyan-500 to-orange-100">

                {/* Research Section */}
                <section className="w-full max-w-7xl mx-auto p-8">
                  <h1 className="text-3xl font-semibold mb-4 text-left" style={{color:"var(--base-teal)"}}>Research</h1>
                  <div className="flex flex-wrap grid grid-flow-col justify-stretch space-x-4">
                    {Array.from({length: 3}).map((_, i) => (
                        <div key={i} className="w-auto flex justify-center">
                          <HomeResearchPrev
                              title={`Research ${i + 1}`}
                              blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                              imageURL="https://media.tenor.com/Hjd8iHgasxQAAAAe/sad-hamster.png"
                              className="w-full"
                          />
                        </div>
                    ))}
                  </div>
                </section>

                  
                {/* Publications & News Section */}
                <section
                    className="w-full max-w-7xl mx-auto p-8 flex flex-col md:flex-row gap-8 bg-white shadow-md rounded-3xl my-4">
                  {/* Publications */}
                  <div className="w-full md:w-2/3 space-y-4">
                    <h2 className="text-2xl font-semibold">Publications</h2>
                    {data.object.metadata.publications.slice(0, 3).map((pub, index) => (
                        <div key={index}
                             className="bg-gray-100 p-4 rounded-3xl shadow transition ease-in-out delay-50 hover:bg-gray-300">
                          <Publication
                              authors={pub.authors}
                              title={pub.title}
                              date={pub.date}
                              journal={pub.journal}
                          />
                        </div>
                    ))}
                    <div className="flex justify-end">
                      <Button text="View More"
                              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"/>
                    </div>
                  </div>
                  {/* News */}
                  <div className="w-full md:w-1/3 space-y-4">
                    <h2 className="text-2xl font-semibold">News</h2>
                    <div className="flex flex-col space-y-4">
                      {data.object.metadata.news.length > 0 && (
                          <div
                              className="bg-gray-100 p-4 rounded-3xl shadow transition ease-in-out delay-50 hover:bg-gray-300">
                            <img src={data.object.metadata.news[newsIndex].image}
                                 alt={data.object.metadata.news[newsIndex].title}
                                 className="w-full h-48 object-cover rounded-lg mb-2"/>
                            <h3 className="text-lg font-medium italic">{data.object.metadata.news[newsIndex].title}</h3>
                          </div>
                      )}
                      <div className="flex justify-end">
                        <Button text="View More"
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"/>
                      </div>
                    </div>
                  </div>
                </section>


                {/* Section for Contacts & Info */}
                <section
                    className="contacts w-full max-w-7xl mx-auto p-8 border border-gray-300 rounded-lg bg-gray-50 shadow-md my-4 text-left"
                    id="contacts"
                >
                  <h2 className="text-customTeal text-4xl font-semibold font-sans leading-[1.2] mb-4">
                    Contacts & Info
                  </h2>
                  <p className="mb-2">
                    We are located within the Brown University Department of Cognitive,
                    Linguistics & Psychological Sciences (CLPS)
                  </p>
                  <p className="mb-1">Metcalf Research Building</p>
                  <p className="mb-1">190 Thayer Street</p>
                  <p className="mb-1">Providence, RI 02912</p>
                  <br></br>
                  <p className="mb-1">Call: (401) 863-3347</p>
                  <p>Email: CLPS@brown.edu, agingandcognitionlab@brown.edu</p>
                </section>
                </div>
              </>
          ) : (
              <p>Loading...</p>
          )}
        </div>

      </div>
  );
}
