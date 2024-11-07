import React from "react";
import "./styles.css";

//export {};

export interface MemberProps {
  name: string;
  description: string;
}

export function Member(props: MemberProps) {
  return (
    <div className="single-member">
      <img
        src="https://pngimg.com/d/square_PNG17.png"
        alt="lab member picture"
        className="photo"
      />
      <div className="description">
        <h2 aria-label="lab member name">{props.name}</h2>
        <p aria-label="lab member description">{props.description}</p>
      </div>
    </div>
  );
}
