import React from "react";
import { useEffect, useState } from "react";
import { mockHomeData } from "../../mock/example_mock_data";
// import { mockResearchData } from "../../mock/research_mock";
import HomeResearchPrev from "../../components/HomeResearchPrev";
import Publication1 from "../../components/Publication";
import Button from "../../components/Button";
import { getPublicationData } from "../../cosmicAPI";
import { DataObject, Publication } from "../research/Interfaces";
import { getHomeNewsImages } from "../../cosmicAPI";
import { getHomePageData } from "../../cosmicAPI";

// make the image span the whole page

interface APIObject {
  object: DataObject1;
}

interface Publication1 {
  title: string;
  journal: string;
}

interface DataObject1 {
  slug: string;
  title: string;
  metadata: Metadata;
}

interface News1 {
  metadata: {
    title: string;
    image: {
      imgix_url: string;
      url: string;
    };
  };
}

interface Metadata {
  heading: string;
  subheading: string;
  location: string;
  phone: string;
  email: string;
  hours: string;
  image: Image;
}

interface Image {
  url: string;
  imgix_url: string;
}

export default function HomePage() {
  const [cosmicdata, setCosmicData] = useState<DataObject[] | undefined>();
  const [data, setData] = useState<APIObject>();
  const [image_data, setImageData] = useState<News1[] | undefined>();

  const [newsIndex, setNewsIndex] = useState(0);
  const gradient = require("../../assets/curved_gradient_home.png");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCosmicData() {
      try {
        const result = await getPublicationData(); // Call the fetchMockData function
        const topics = result.object.metadata.topics_array as DataObject[];

        setCosmicData(topics);
        console.log(result);
        console.log(topics);
        console.log(data);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    }
    fetchCosmicData();
  }, []);

  useEffect(() => {
    async function fetchHomeData() {
      try {
        const data = await getHomePageData(); // Call the fetchMockData function

        setData(data);
        console.log(data);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    }
    fetchHomeData();
  }, []);

  useEffect(() => {
    async function fetchImageData() {
      try {
        const result = await getHomeNewsImages(); // Call the fetchMockData function
        const image_data = result.object.metadata.news_image_cycle as News1[];

        setImageData(image_data);
        console.log(result);
        console.log(image_data);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    }
    fetchImageData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNewsIndex((prevIndex) =>
        image_data ? (prevIndex + 1) % image_data.length : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [image_data]);

  return (
    <div className="App bg-white min-h-screen flex flex-col items-center text-gray-800 font-sans">
      <div
        className={"text-center min-h-screen"}
        style={{
          backgroundImage: `url(${gradient})`,
          backgroundSize: "100% 55%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
        }}
      >
        <div>
          {data ? (
            <>
              {/* <div className="mb-8 mt-4">
                <a href="join">
                  <Button
                    text="Join Us"
                    className="bg-[#51AAAB] text-white rounded-lg hover:bg-[#327475]"
                  />
                </a>
              </div> */}

              {/* Hero Section */}
              <div className="px-12">
                <div
                  className="group w-full bg-cover bg-center rounded-3xl my-6"
                  style={{
                    backgroundImage: `url(${data.object.metadata.image.url})`,
                  }}
                >
                  <div className="w-full h-[60vh] bg-black bg-opacity-0 hover:bg-opacity-85 hover:bg-[#F1DDCE] transition-opacity duration-500 flex flex-col justify-center items-center text-white text-center rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 transform group-hover:translate-y-0 transition-transform duration-500">
                      {data.object.metadata.heading}
                    </h1>
                    <p className="text-lg text-black sm:text-2xl transform group-hover:translate-y-0 transition-transform duration-500">
                      {data.object.metadata.subheading}
                    </p>
                  </div>
                </div>
              </div>
              {/* "var(--base-teal)" */}
              {/* Research Section */}
              {cosmicdata && cosmicdata.length > 0 && (
                <section className="w-full mx-auto px-20 mb-20 mt-28 space-y-8">
                  <h2
                    className="text-5xl font-semibold mb-4 text-left"
                    style={{ color: "var(--base-teal)" }}
                  >
                    Research
                  </h2>
                  <div className="flex flex-wrap grid grid-flow-col justify-stretch space-x-8">
                    {cosmicdata[0].metadata.publications
                      .slice(0, 3)
                      .map((pub, index) => (
                        <div key={index} className="w-auto flex justify-center">
                          <HomeResearchPrev
                            title={pub.metadata.title}
                            blurb={pub.metadata.description}
                            imageURL={pub.metadata.image.url}
                            classname="w-full"
                          />
                        </div>
                      ))}
                  </div>
                </section>
              )}

              {/* Publications & News Section */}
              <section className="w-full mx-auto px-20 py-10 flex flex-col md:flex-row gap-8 bg-transparent rounded-3xl my-4">
                {/* Publications */}
                {cosmicdata && cosmicdata.length > 0 && (
                  <div className="w-full md:w-2/3 space-y-8">
                    <h2
                      className="text-5xl font-semibold text-left"
                      style={{ color: "var(--off-white)" }}
                    >
                      Publications
                    </h2>
                    {cosmicdata[0].metadata.publications
                      .slice(0, 3)
                      .map((pub, index) => (
                        <div
                          key={index}
                          className="bg-gray-100 p-4 rounded-3xl shadow transition ease-in-out delay-50 hover:bg-gray-300"
                        >
                          <Publication1
                            title={pub.metadata.title}
                            journal={pub.metadata.description}
                          />
                        </div>
                      ))}
                    <div className="flex justify-end">
                      <div>
                        <a href="research">
                          <Button
                            text="View More"
                            className="bg-[#51AAAB] py-3 px-6 rounded-2xl text-white rounded-lg hover:bg-[#327475]"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                {/* News */}
                <div className="w-full md:w-1/3 space-y-8">
                  <h2
                    className="text-5xl font-semibold text-left"
                    style={{ color: "var(--off-white)" }}
                  >
                    News
                  </h2>
                  <div className="flex flex-col space-y-8">
                    {image_data && image_data.length > 0 && (
                      <div className="bg-gray-100 p-4 rounded-3xl shadow transition ease-in-out delay-50 hover:bg-gray-300">
                        <img
                          src={image_data[newsIndex].metadata.image.url}
                          alt={image_data[newsIndex].metadata.title}
                          className="w-full h-48 object-cover rounded-lg mb-2"
                        />
                        <h3 className="text-lg font-medium italic">
                          {image_data[newsIndex].metadata.title}
                        </h3>
                      </div>
                    )}
                    <div className="flex justify-end">
                      <div>
                        <a href="news">
                          <Button
                            text="View More"
                            className="bg-[#51AAAB] py-3 px-6 rounded-2xl text-white rounded-lg hover:bg-[#327475]"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section for Contacts & Info */}
              <section
                className="contacts w-full mx-auto px-20 py-10 rounded-lg bg-transparent my-4 text-left space-y-1"
                id="contacts"
              >
                <h2 className="text-customTeal text-5xl font-semibold font-sans leading-[1.2] mb-6">
                  Contact & Info
                </h2>
                <p className="mb-2 text-xl">
                  Located within the Department of Cognitive, Linguistics &
                  Psychological Sciences (CLPS)
                </p>
                <p className="mb-1 text-xl">Metcalf Research Building</p>
                <p className="mb-1 text-xl">190 Thayer Street</p>
                <p className="mb-1 text-xl">Providence, RI 02912</p>
                <br></br>
                <p className="mb-1 text-xl">
                  Call: {data.object.metadata.phone}
                </p>
                <p className="text-xl">Email: {data.object.metadata.email}</p>
              </section>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
