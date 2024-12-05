import React from "react";
import "./profile.css";

export interface AlumniProps {
  name: string;
  role: string;
  description: string;
  photo: string;
}

export function Alumni(props: AlumniProps) {
  const alumni1 = require("./photos/Alicia_gradstudent_alum.png");

  // function makePhotoURL(email: string): any {
  //   const pngURL = require(props.photo);
  //   return pngURL;
  // }

  return (
    <div className="single-alumni">
      <img src={alumni1} alt="alumni picture" className="photo" />

      <div>
        <h2 aria-label="alumni name">{props.name}</h2>
        <h3 aria-label="role">{props.role}</h3>
        <p aria-label="alumni description">{props.description}</p>
      </div>
    </div>
  );
}
