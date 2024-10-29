import React from 'react'
import {useEffect, useState} from 'react'
import {labMembersMockData} from "../../mock/lab_members_mock_data";
import { StringLiteral } from 'typescript';
import './profile.css';

interface APIObject {
  object: DataObject;
}

interface DataObject {
  slug: string;
  title: string;
  metadata: Metadata;
}

interface Metadata {
  role: string;
  bio: string;
  photo: Image;
  email: string;
}

interface Image {
  url: string;
  imgix_url: string;
}


export default function MembersPage() {
  const [data, setData] = useState<APIObject | undefined>();
  
  
    
<div>     
  <header className = "header">
  //header content
  <nav className = "banner">
    <ul>
      <li><a href = "#home">Home</a></li>
      <li><a href = "#Research & Publications">Research & Publications</a></li>
      <li><a href = "#News">News</a></li>
      <li><a href = "#Lab Members">Lab Members</a></li>
      <li><a href = "#Contacts">Contacts</a></li>
    </ul>
  </nav>
  </header>
  <main id = "lab-members" className = "lab-members">
    <section className = "lab-members">
     //1 <h2> Principle Investigator</h2>
     //2 <h2> PhD</h2>
     //3 <h2> Graduates</h2>
     //4 <h2> Undegraduates</h2>
     //5 <h2> Alumni</h2>
    </section>
  </main>
</div> 

/*

These are the if statements for displaying data:

if (object.metadata.role == “Principle Investigator”) {
	print(“Dr.” + object.title); //accesses the value stored in title
}

if (object.metadata.role == “PhD”) {
	print(“Dr.” + object.title); //accesses the value stored in title
}

if (object.metadata.role == “Graduates”) {
	print(object.title); //accesses the value stored in title
}

if (object.metadata.role == “Undergraduates”) {
	print(object.title); //accesses the value stored in title
}

if (object.metadata.role == “Alumni”) {
	print(object.title); //accesses the value stored in title
}


*/
  
  return (
  <div className="flex flex-col my-10 mx-14">
    <div>
        <h1 className="text-4xl">Lab Members</h1>
    </div> 

    <div className = "member">
      <div className ="flex flex-col">
            <div className = "title">
                <p>Title</p>
             </div>
             <div className= "image">
         
             </div>

      </div>
      <div className ="flex flex-col">
        <h1 className = "name">
 
         <p>Name</p>

        </h1>
        <h2 className = "description">
          <p> Lorem ipsum...</p>
         </h2>
      </div>


    </div>

    <div className="flex flex-col my-10">
        <h2 className = "text-4xl">Alumni</h2>
    </div>

    <div className = "alumni">

      <div className = "flex flex-col">
          <div className = "image2">
    
         </div>

         <div className = "name2">
            
            <p> Name </p>
    
         </div>

         <div className = "description2">
           
            <p> Lorem Ipsum... </p>
    
          </div>
      </div>

    </div>
    
  </div>
  )
}
