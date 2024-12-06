import React from "react";
import "./profile.css";

export interface AlumniProps {
  name: string;
  role: string;
  description: string;
  photo: string;
}

export function Alumni(props: AlumniProps) {
  //const alumni1 = require("./photos/Alicia_gradstudent_alum.png");

  const photos: { [key: string]: string } = {
    alum1: require("./photos/Alicia_gradstudent_alum.png"),
    alum2: require("./photos/BethKellerman_gradstudent_alum.png"),
    alum3: require("./photos/Diah_ugrad_alum.png"),
  };

  function makePhotoURL(photoKey: string): string {
    return photos[photoKey] || "";
  }

  return (
    <div className="single-alumni">
      <img
        src={makePhotoURL(props.photo)}
        alt="alumni picture"
        className="photo"
      />

      <div className="alumni-description">
        <h2 aria-label="alumni name">{props.name}</h2>
        {/* <h3 aria-label="role">{props.role}</h3> */}
        <p aria-label="alumni description">{props.description}</p>
      </div>
    </div>
  );
}
