import React from "react";
import { useEffect, useState } from "react";
import { mockHomeData } from "../../mock/example_mock_data";
<<<<<<< HEAD
import HomeResearchPrev from "../../components/HomeResearchPrev";
import "./HomePage.css"
=======
import Publication from "../../components/Publication";
>>>>>>> 0a35797e7450f8f4998a74735358c167b7a60874

interface APIObject {
  object: DataObject;
}

interface DataObject {
  slug: string;
  title: string;
  metadata: Metadata;
}

interface Metadata {
  heading: string;
  subheading: string;
  introduction: string;
  image: Image;
}

interface Image {
  url: string;
  imgix_url: string;
}

export default function HomePage() {
  const [data, setData] = useState<APIObject>();

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

  return (
    <div className="App">
      <div>
        <h1>This is our super cool website lol</h1>
      </div>
      <div>
        {data ? (
          <>
            <h2>{data.object.metadata.heading}</h2>
            <h3>{data.object.metadata.subheading}</h3>
            <h3>{data.object.metadata.introduction}</h3>
            {data.object.metadata.image.url && (
              <img
                src={data.object.metadata.image.url}
                alt={data.object.metadata.heading}
              />
            )}
            <Publication authors="Gordon Jin"
              title="The effect of sleep on aging"
              date="10/16/2024"
              journal="Nature"></Publication>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
<<<<<<< HEAD
      <div className="parent">
        <h2>Research</h2>
        <div className="child">
          <HomeResearchPrev
          title="Research 1"
          blurb="lorem ipsum dolor sit amet"
          imageURL="https://media.tenor.com/Hjd8iHgasxQAAAAe/sad-hamster.png"
          ></HomeResearchPrev>
        </div>

        <div className="child">
          <HomeResearchPrev
          title="Research 2"
          blurb="lorem ipsum dolor sit amet"
          imageURL="https://media.tenor.com/Hjd8iHgasxQAAAAe/sad-hamster.png"
          ></HomeResearchPrev>
        </div>

        <div className="child">
          <HomeResearchPrev
          title="Research 3"
          blurb="lorem ipsum dolor sit amet"
          imageURL="https://media.tenor.com/Hjd8iHgasxQAAAAe/sad-hamster.png"
          ></HomeResearchPrev>
        </div>


=======

      {/* Section for Contacts & Info */}
      <div className="content-sections">

        <section className="contacts">
          <h2>Contacts & Info</h2>
          <p> We are located within the Brown University Department of Cognitive, Linguistics &
            Psychological Sciences (CLPS)</p>
          <p> Metcalf Research Building </p>
          <p>190 Thayer Street</p>
          <p>Providence, RI 02912</p>
          <p>Call: (401) 863-3347</p>

          <p>Email: CLPS@brown.edu, agingandcognitionlab@brown.edu</p>

        </section>
>>>>>>> 0a35797e7450f8f4998a74735358c167b7a60874
      </div>
    </div>
  );
}
