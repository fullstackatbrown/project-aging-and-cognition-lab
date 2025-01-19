import React from "react";
import { useEffect, useState } from "react";
import { getJoinPageData } from "../../cosmicAPI";

interface APIObject {
  object: DataObject;
}

interface DataObject {
  slug: string;
  title: string;
  metadata: Metadata;
}

interface Metadata {
  text: Text1;
  participant_url: string;
  researcher_url: string;
  researcher_image: Image;
  participant_image: Image;
}

interface Text1 {
  slug: string;
  title: string;
  metadata: {
    researcher_text: string;
    participant_text: string;
  };
}

interface Image {
  url: string;
  imgix_url: string;
}

export default function JoinResearcherPage() {
  const gradient = require("../../assets/curved_gradient.png");
  const [data, setData] = useState<APIObject>();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCosmicData() {
      try {
        const data = await getJoinPageData(); // Call the fetchMockData function

        setData(data);
        console.log(data);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    }
    fetchCosmicData();
  }, []);
  if (data) {
    return (
      <div
        className={"text-center min-h-screen"}
        style={{
          backgroundImage: `url(${gradient})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center bottom",
        }}
      >
        <header
          className="text-6xl font-bold mt-12 mb-8"
          style={{ color: "var(--dark-teal)" }}
        >
          Join Us Today!
        </header>
        <div className="flex justify-center gap-32 px-4">
          {/* Researcher Column */}
          <div className="text-center max-w-md">
            <h2
              className="text-4xl font-semibold"
              style={{ color: "var(--base-teal)" }}
            >
              As a Researcher
            </h2>
            <img
              src={data.object.metadata.researcher_image.url}
              alt="Join us as a Researcher!"
              className="mt-4 mb-4 rounded-xl w-full"
            />
            <p className="text-left text-black text-[16px] mb-6">
              {data.object.metadata.text.metadata.researcher_text
                .split("\n")
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </p>
            <a
              href={data.object.metadata.researcher_url}
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="px-6 py-2 bg-white text-black text-[16px] rounded-full shadow-md hover:bg-teal-100 transition mb-6"
                style={{ border: "2px solid var(--base-teal)" }}
              >
                Join as a researcher!
              </button>
            </a>
          </div>

          {/* Participant Column */}
          <div className="text-center max-w-md">
            <h2
              className="text-4xl font-semibold"
              style={{ color: "var(--base-teal)" }}
            >
              As a Participant
            </h2>
            <img
              src={data.object.metadata.participant_image.url}
              alt="Join us as a Participant!"
              className="mt-4 mb-4 rounded-xl w-full"
            />
            <p className="text-left text-black text-[16px] mb-6">
              {data.object.metadata.text.metadata.participant_text
                .split("\n")
                .map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
            </p>
            <a
              href={data.object.metadata.participant_url}
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="px-6 py-2 bg-white text-black text-[16px] rounded-full shadow-md hover:bg-teal-100 transition mb-6"
                style={{ border: "2px solid var(--base-teal)" }}
              >
                Join as a participant!
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
