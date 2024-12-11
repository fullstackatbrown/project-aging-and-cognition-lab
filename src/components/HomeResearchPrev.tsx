import React from 'react';

export default function HomeResearchPrev(props: any) {
  return (

    <div className="shadow-md bg-gray-100 w-full h-full p-4 rounded-3xl space-y-2 group-hover: bg-gray-200
    transition ease-in-out delay-50 hover:bg-gray-300 flex flex-col justify-center items-center">
        <h4 className='text-center text-lg font-bold'>{props.title}</h4>
        <h5 className='text-center text-sm'>{props.blurb}</h5>
        <div className='flex justify-center items-center w-1/3'>
          <img className='rounded-lg shadow-md'
          src={props.imageURL} alt=""/>
        </div>
       
    </div>
  )
}