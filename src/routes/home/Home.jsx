import React from 'react'
import AnimatedLetters from '../../components/animatedletters/AnimatedLetters.jsx';
import mLogo from '../../assets/mcy-logo-m.png';
import yLogo from '../../assets/mcy-logo-y.png';
import { Link } from 'react-router-dom';

export default function Home() {
  const hello = ['H','e','l','l','o','!'];
  const named = ['I','m',' '];
  const namedTwo = ['a','s','o','n',' '];
  const namedThree = ['a','t','e','s',' '];
  const lastLine = ['a',' ','W','e','b',' ','D','e','v','e','l','o','p','e','r','.'];

  return (
    <div className='w-screen h-screen bg-center bg-cover bg-mainBg text-white pt-20 p-4 lg:pt-10'>
      <div className='pt-20 pb-1 mt-16 text-center pr-24 mr-14 md:mr-24 lg:text-start lg:pl-36'>
          <AnimatedLetters array={hello}/>
      </div>
      <div className='grid justify-items-center pr-4 md:pr-0 md:pl-4'>
        <div>
          <AnimatedLetters array={named}/>
          <span>
            <img src={mLogo} alt="" className='h-8 w-8 inline md:h-12 md:w-12'/>
            <AnimatedLetters array={namedTwo} />
          </span>
          <span>
            <img src={yLogo} alt="" className='h-8 w-8 inline md:h-12 md:w-12'/>
            <AnimatedLetters array={namedThree} />
          </span>
        </div>
        <div className='pr-2 md:pr-4'>
          <AnimatedLetters array={lastLine} />
        </div>
      </div>
      <div className='pt-14 pb-20 grid justify-items-center md:pl-8'>
        <p className='text-xs md:text-base w-1/2'>Frontend Developer / React.js / Node.js / Javascript Programmer / Youtuber</p>
      </div>
      <div className='text-center pt-20 grid justify-items-center'>
        <Link to='/contact'>
          <p className='border p-4 rounded-xl bg-teal-300 text-xl border-gray-900 text-gray-900'>Contact Me!</p>
        </Link>
      </div>
    </div>
  )
}
