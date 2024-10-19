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
    <div className="bg-gray-100 rounded-lg p-8">
      <h3 className="text-2xl font-semibold mb-6">More</h3>
      <div className="space-y-4">
        <div className="bg-gray-200 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-2">{moreTitle1}</h4>
          <p className="text-gray-600">{moreInfo1}</p>
        </div>
        <div className="bg-gray-200 rounded-lg p-6">
          <h4 className="text-lg font-semibold mb-2">{moreTitle2}</h4>
          <p className="text-gray-600">{moreInfo2}</p>
        </div>
      </div>
    </div>
  );
}
