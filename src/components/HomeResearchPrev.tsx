import React from 'react';
import "./HomeResearchPrev.css";

export default function HomeResearchPrev(props: any) {
  return (

    <div className='container'>
        <h4>{props.title}</h4>
        <h5>{props.blurb}</h5>
        <img src={props.imageURL} alt="" width="150" height="150" />
       
    </div>

    
  )
}