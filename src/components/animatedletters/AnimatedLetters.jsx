import React from 'react'

export default function AnimatedLetters({array}) {
  return (
    <span>
        {
            array.map((char, i) => (
                <span key={char+i} className='animate__animated animate__fadeIn z-10 text-2xl font-bold'>
                    {char}
                </span>
            ))
        }
    </span>
  )
}
