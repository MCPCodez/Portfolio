import React from 'react'
import { useRouteError } from "react-router-dom"
import 'animate.css'

export default function Errorpage() {
    const error = useRouteError();
    console.log(error);
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen animate__animated animate__flipInX'>
      <h1 className='text-lg md:text-2xl'>{error.statusText}</h1>
      <p className='text-lg md:text-xl'>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status}</i> 
        <i>{' ' + error.data}</i>
      </p>
    </div>
  )
}
