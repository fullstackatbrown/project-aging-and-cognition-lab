import React from 'react'
import {mockLabMembersData } from "../../mock/lab_members_mock_data";


export default function MembersPage() {
  
    
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
  
  return <div>MembersPage</div>;

}
