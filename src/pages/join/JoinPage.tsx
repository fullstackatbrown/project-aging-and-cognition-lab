import React from 'react';
import { mockJoinData } from './join_mock_data';

export default function JoinResearcherPage() {
  const gradient = require('../../assets/curved_gradient.png');
  return (
    <div
      className={'text-center min-h-screen'}
      style={{
        backgroundImage: `url(${gradient})`,
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom', 
      }}
    >
      <header 
        className="text-6xl font-bold mt-12 mb-8"
        style={{color: 'var(--base-teal)'}}>Join Us Today!
      </header>
      <div className="flex justify-center gap-32 px-4">
        {/* Researcher Column */}
        <div className="text-center max-w-md">
          <h2 
            className="text-4xl font-semibold"
            style={{color: 'var(--dark-teal)'}}>As a researcher</h2>
          <img
            src={mockJoinData.object.metadata.images.researcher_url}
            alt="Join us as a Researcher!"
            className="mt-4 mb-4 rounded-xl w-full"
          />
          <p className="text-black text-sm mb-6">
            {mockJoinData.object.metadata.text.researcher_text}
          </p>
          <button 
            className="px-6 py-2 bg-white text-black text-sm rounded-full shadow-md hover:bg-teal-100 transition"
            style={{ border: '2px solid var(--base-teal)' }}>Join as a researcher!
          </button>
        </div>

        {/* Participant Column */}
        <div className="text-center max-w-md">
          <h2 
            className="text-4xl font-semibold"
            style={{color: 'var(--dark-teal)'}}>As a participant</h2>
          <img
            src={mockJoinData.object.metadata.images.participant_url}
            alt="Join us as a Participant!"
            className="mt-4 mb-4 rounded-xl w-full"
          />
          <p className="text-black text-sm mb-6">
            {mockJoinData.object.metadata.text.participant_text}
          </p>
          <button 
            className="px-6 py-2 bg-white text-black text-sm rounded-full shadow-md hover:bg-teal-100 transition"
            style={{ border: '2px solid var(--base-teal)' }}>Join as a participant!
          </button>
        </div>
      </div>
    </div>
  );
}
