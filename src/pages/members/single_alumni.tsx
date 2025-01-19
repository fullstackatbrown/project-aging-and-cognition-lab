import React from "react";
import "./profile.css";

export interface AlumniProps {
  name: string;
  role: string;
  description: string;
  photo: string;
  email: string;
}

export function Alumni(props: AlumniProps) {
  return (
    <div className="single-alumni flex flex-col justify-evenly">
      <img src={props.photo} alt="alumni picture" className="photo" />

      <div className="alumni-description mb-5">
        <h2 aria-label="alumni name">{props.name}</h2>
        {/* <h3 aria-label="role">{props.role}</h3> */}
        <p aria-label="alumni description">{props.description}</p>
      </div>
    </div>
  );
}
