import React from "react";

export default function HomeResearchPrev(props: any) {
  return (
    <div
      className="bg-gray-100 w-full h-full p-4 rounded-3xl space-y-2 group-hover: bg-gray-200
    transition ease-in-out delay-50 hover:bg-gray-300 flex flex-col justify-center items-center"
    >
      <h4 className="leading-6 text-center text-lg font-bold mb-2">
        {props.title}
      </h4>
      <h5 className="text-center text-sm">{props.blurb}</h5>
      <div className="flex justify-center items-center w-1/2">
        <img className="rounded-lg mt-2" src={props.imageURL} alt="" />
      </div>
    </div>
  );
}
