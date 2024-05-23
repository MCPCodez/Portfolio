import React from 'react';
import Project from './eaProject/Project.jsx';

export default function Projects() {

  return (
    <div className='bg-mainBg h-screen w-screen bg-cover overflow-auto'>
      <div>
        <p className='text-xl text-white text-center hidden'>Projects!</p>
      </div>
      <div className='p-6 pt-20 overflow-scroll md:pt-16'>
        <Project />
      </div>
    </div>
    
  )
}
