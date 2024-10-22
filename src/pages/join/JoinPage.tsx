import React from 'react'
import { mockJoinData } from './join_mock_data'

export default function JoinResearcherPage() {

  return(
  <div>
    <header>Join Us Today!</header>
    <div>
      {/* Researcher Column */}
      <div>
        <h2>Join us as a researcher</h2>
        <img>
          {/* src=mockJoinData.object.metadata.images.researcher_url
          alt="Join us as a Researcher!" */}
        </img>
        <p>mockJoinData.object.metadata.text.researcher_text</p>
        <button>As a Researcher!</button>
      </div>

      {/* Participant Column */}
      <div>
        <h2>Join us as a participant</h2>
        <img src={mockJoinData.object.metadata.images.participant_url}
        alt="Join us as a Participant!">
        </img>
        <p>mockJoinData.object.metadata.text.paricipant_text</p>
        <button>As a Participant!</button>
      </div>
    </div>
  </div>
  );
  
}
