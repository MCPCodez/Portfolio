import React from 'react'

export default function About() {
  return (
    <div className='bg-mainBg bg-cover bg-center h-screen w-screen'>
      <div className='grid grid-rows-10 h-screen justify-items-center p-8 md:pb-20'>
        <h2 className='text-white text-2xl md:text-3xl md:pt-20 row-span-1 content-center animate__animated animate__fadeIn'>About Me</h2>
        <p className='text-white text-base md:text-xl row-span-4 content-center font-bold animate__animated animate__fadeIn animate__delay-1s'>
          I'm a massive fan of web & app development. I absolutely love how our lives are surrounded by tech everyday. 
          My goal is to learn as much as I can about many different technologies. My dream is to work on software and possibly some hardware of big robotics projects. 
          I truly believe robotics is the future of our world and will help us achieve many things.
        </p>
        <p className='text-white text-base md:text-xl row-span-4 font-bold animate__animated animate__fadeIn animate__delay-2s'>
          I am confident in my ability to tackle any challenge head on and I have no shame about not knowing and having to ask or look for help to learn. 
          If you are looking for a positive go getter teammate I may be the guy! If you need someone to develop a site for your business or need a team 
          member to help you build an app then please contact me! I would love to be a part of your team and your journey!
        </p>
        <a href="/contact" className='text-gray-900 text-2xl row-span-1 border border-black content-center p-4 rounded-xl bg-teal-300 animate__animated animate__fadeIn animate__delay-3s'>Contact Me</a>
      </div>
    </div>
  )
}
