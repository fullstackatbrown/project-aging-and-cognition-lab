import React from "react";
import "./profile.css";

//export {};

export interface AlumniProps {
  name: string;
  role: string;
  description: string;
}

export function Alumni(props: AlumniProps) {
  return (
    <div className="single-alumni">
      <img
        src="https://pngimg.com/d/square_PNG17.png"
        alt="alumni picture"
        className="photo"
      />

      <div>
        <h2 aria-label="alumni name">{props.name}</h2>
        <h3 aria-label="role">{props.role}</h3>
        <p aria-label="alumni description">{props.description}</p>
      </div>
    </div>
  );
}
