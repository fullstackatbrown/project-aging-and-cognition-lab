import React from "react";
import { useEffect, useState } from "react";
import { labMembersMockData } from "../../mock/lab_members_mock_data";
import { StringLiteral } from "typescript";
import "./profile.css";
import { getMemberPageData } from "../../cosmicAPI"; // Ensure this is the correct API import

import { Alumni } from "./single_alumni";
import { Member } from "./single_member";

interface APIObject {
  object: DataObject;
}

interface DataObject {
  slug: string;
  title: string;
  metadata: Metadata;
}

interface Metadata {
  members: LabMember[];
  alumni: LabMember[];
}

interface LabMember {
  metadata: {
    role: string;
    name: string;
    bio: string;
    photo: {
      imgix_url: string;
      url: string;
    };
    email: string;
  };
}

export default function MembersPage() {
  const [membersData, setMembersData] = useState<LabMember[] | undefined>();
  const [alumniData, setAlumniData] = useState<LabMember[] | undefined>();
  const [memberData, setMemberData] = useState<APIObject | null>(null);
  const [loading, setLoading] = useState(true);

  // may need to change to update when cms is updated
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMemberPageData(); // Call the API
        console.log("API response:", data);
        // Log the response to check its structure
        // if (!Array.isArray(data.objects) || data.objects.length === 0) {
        //   console.error("No objects found in the API response.");
        //   return;
        // }

        const members = data.object.metadata.members as LabMember[];
        const alumni = data.object.metadata.alumni as LabMember[];
        setMembersData(members);
        setAlumniData(alumni);
      } catch (error) {
        console.error("Error fetching research data:", error); // Log errors if any
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchData();
  }, []);

  if (loading) {
    console.log("loading");
  }

  const getCurrentMembers = () => {
    if (!membersData) return [];
    return membersData;
  };

  const getCurrentAlumni = () => {
    if (!alumniData) return [];
    return alumniData;
  };

  <div>
    <header className="header">
      //header content
      <nav className="banner">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#Research & Publications">Research & Publications</a>
          </li>
          <li>
            <a href="#News">News</a>
          </li>
          <li>
            <a href="#Lab Members">Lab Members</a>
          </li>
          <li>
            <a href="#Contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>

    <main id="lab-members" className="lab-members">
      <section className="lab-members">
        //1 <h2> Principal Investigator</h2>
        //2 <h2> PhD</h2>
        //3 <h2> Graduates</h2>
        //4 <h2> Undegraduates</h2>
        //5 <h2> Alumni</h2>
      </section>
    </main>
  </div>;

  return (
    <div className="lab-members">
      <div className="flex flex-col my-10">
        <h1 className="font-semibold mb-[-10px]">Lab Members</h1>

        <div className="members-section">
          {getCurrentMembers().map((member, index) => (
            <Member
              key={index}
              name={member.metadata.name}
              role={member.metadata.role}
              description={member.metadata.bio}
              photo={member.metadata.photo.url}
              email={member.metadata.email}
            />
          ))}
        </div>

        <div className="alumni-section">
          <h1 className="mb-[-20px]">Alumni</h1>

          <div className="all-alumni">
            {getCurrentAlumni().map((alumni, index) => (
              <Alumni
                key={index}
                name={alumni.metadata.name}
                role={alumni.metadata.role}
                description={alumni.metadata.bio}
                photo={alumni.metadata.photo.url}
                email={alumni.metadata.email}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
