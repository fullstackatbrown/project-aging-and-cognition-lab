import React from "react";
import { useEffect, useState } from "react";
import { labMembersMockData } from "../../mock/lab_members_mock_data";
import { StringLiteral } from "typescript";
import "./profile.css";

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
  role: string;
  name: string;
  bio: string;
  photo: Image;
  email: string;
}

interface Image {
  url: string;
  imgix_url: string;
}

export default function MembersPage() {
  const [membersData, setMembersData] = useState<LabMember[] | undefined>();
  const [alumniData, setAlumniData] = useState<LabMember[] | undefined>();

  function fetchMembersData(): LabMember[] {
    return labMembersMockData.object.metadata.members as LabMember[];
  }

  function fetchAlumniData(): LabMember[] {
    return labMembersMockData.object.metadata.alumni as LabMember[];
  }

  // may need to change to update when cms is updated
  useEffect(() => {
    const jsonData = fetchMembersData();
    setMembersData(jsonData);
  }, []);

  useEffect(() => {
    const jsonData = fetchAlumniData();
    setAlumniData(jsonData);
  }, []);

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
        //1 <h2> Principle Investigator</h2>
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
        <h1 className="text-4xl">Lab Members</h1>

        <div className="alumni-section">
          {getCurrentMembers().map((member, index) => (
            <Member
              key={index}
              name={member.name}
              role={member.role}
              description={member.bio}
            />
          ))}
        </div>

        <h1 className="text-4xl">Alumni</h1>

        <div className="alumni-section">
          {getCurrentAlumni().map((alumni, index) => (
            <Alumni
              key={index}
              name={alumni.name}
              role={alumni.role}
              description={alumni.bio}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
