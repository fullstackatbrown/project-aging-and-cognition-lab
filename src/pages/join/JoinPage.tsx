import React from 'react';
import { mockJoinData } from './join_mock_data';

export default function JoinResearcherPage() {
  return (
    <div className="text-center">
      <header className="text-4xl font-bold mb-6 text-blue-500">Join Us Today!</header>
      <div className="flex justify-center gap-10">
        {/* Researcher Column */}
        <div className="text-center max-w-xs">
          <h2 className="text-xl font-semibold text-blue-300">Join us as a researcher</h2>
          <img
            src={mockJoinData.object.metadata.images.researcher_url}
            alt="Join us as a Researcher!"
            className="border mt-4 mb-2 rounded-xl"
          />
          <p className="text-black text-sm mb-4">
            {mockJoinData.object.metadata.text.researcher_text}
          </p>
          <button className="px-4 py-2 bg-gray-200 text-sm rounded-xl hover:bg-gray-300 transition border-blue-300 border">
            As a researcher!
          </button>
        </div>

        {/* Participant Column */}
        <div className="text-center max-w-xs">
          <h2 className="text-xl font-semibold text-blue-300">Join us as a participant</h2>
          <img
            src={mockJoinData.object.metadata.images.participant_url}
            alt="Join us as a Participant!"
            className="border mt-4 mb-2 rounded-xl"
          />
          <p className="text-black text-sm mb-4">
            {mockJoinData.object.metadata.text.participant_text}
          </p>
          <button className="px-4 py-2 bg-gray-200 text-sm rounded-xl hover:bg-gray-300 transition border-blue-300 border">
            As a participant!
          </button>
        </div>
      </div>
    </div>
  );
}
