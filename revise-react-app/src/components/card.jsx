import React from 'react';

export default function Card(props){
    return(
        <div className="flex flex-col border-5 b-color-red-100 bg-blue-900 h-50 rounded justify-center margin-4 p-4 content-evenly mx-auto  max-h-md max-w-sm my-4 ">
            <h1 className='text-3xl text-amber-50 top-0'>{props.cardTitle}</h1>
            <p className='text-amber-100 font-extralight'>{props.description}</p>
        </div>
    )
}