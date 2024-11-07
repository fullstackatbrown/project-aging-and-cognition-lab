import React from "react";
import "./styles.css";

//export {};

export interface AlumniProps {
  name: string;
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
      <h2 aria-label="alumni name">{props.name}</h2>
      <p aria-label="alumni description">{props.description}</p>
    </div>
  );
}
