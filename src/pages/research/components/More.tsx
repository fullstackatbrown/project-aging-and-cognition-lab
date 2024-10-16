import React from "react";

interface MoreProps {
  moreTitle1: string;
  moreInfo1: string;
  moreTitle2: string;
  moreInfo2: string;
}

export default function More({
  moreTitle1,
  moreInfo1,
  moreTitle2,
  moreInfo2,
}: MoreProps) {
  return (
    <div className="more-section">
      <h3>More Information</h3>
      <div className="more-box">
        <h4>{moreTitle1}</h4>
        <p>{moreInfo1}</p>
      </div>
      <div className="more-box">
        <h4>{moreTitle2}</h4>
        <p>{moreInfo2}</p>
      </div>
    </div>
  );
}
