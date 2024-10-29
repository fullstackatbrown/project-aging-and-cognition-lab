import React from 'react';

export default function HomeResearchPrev(props: any) {
  return (

    <div className="border-black border-2 bg-gray-200 w-1/2 aspect-square p-4 rounded-lg">
        <h4 className='text-center'>{props.title}</h4>
        <h5 className='text-center'>{props.blurb}</h5>
        <div className='flex justify-center items-center'>
          <img className='w-2/3'
          src={props.imageURL} alt=""/>
          </div>
       
    </div>
  )
}