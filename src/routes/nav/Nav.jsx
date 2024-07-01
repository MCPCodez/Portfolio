import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import { AiTwotoneHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { GrContact } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { HiBarsArrowDown } from "react-icons/hi2";
import { HiOutlineBarsArrowUp } from "react-icons/hi2";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import logo from '../../assets/Mason-Logo.png';
import mcyLogo from '../../assets/mcy-logo.png';

export default function Nav() {
  function navHandler(){
    const ua = document.getElementById('unactivated');
    const a = document.getElementById('activated');
    const navbarid = document.getElementById('navbarid');

    ua.classList.toggle('hidden');
    a.classList.toggle('hidden');
    navbarid.classList.remove('hidden');
    navbarid.classList.toggle('animate__fadeInDown');
    navbarid.classList.toggle('animate__fadeOutUp');

    return;
  }

  return (
    <>
        <div className='absolute top-4 right-2 text-2xl cursor-pointer lg:left-4 lg:top-4'>
          <HiBarsArrowDown className='animate-pulse text-teal-400' onClick={navHandler} id='unactivated'/>
        </div>
        <div className='absolute animate__animated animate__fadeOutUp hidden bg-gray-900 w-screen h-screen z-20 lg:w-1/12 lg:animate__fadeInDown' id='navbarid'>
          <HiOutlineBarsArrowUp className='hidden absolute top-4 right-2 text-2xl text-teal-400 animate-pulse cursor-pointer' onClick={navHandler} id='activated'/>
          <div className='text-white pl-4 pt-4'>
            <Link to='/' onClick={navHandler}>
              <img src={mcyLogo} alt="" className='h-10 w-10'/>
            </Link>
          </div>
          <div className='grid justify-center'>
            <Link to='/projects' onClick={navHandler}>
              <img src={logo} alt="" className='h-36 w-44 lg:p-4'/>
            </Link>
          </div>
          <ul className='grid grid-rows-4 w-screen text-center h-2/4 lg:w-max lg:pl-0 lg:w-full lg:justify-items-center lg:pt-10 lg:h-ax'>
            <li className='bg-purple-400 h-max pb-4 pt-4 rounded-lg lg:bg-inherit'>
              <Link to='/' onClick={navHandler} className='group lg:p-4'>
                <AiTwotoneHome className='hidden lg:block lg:w-8 lg:h-8 lg:text-teal-300 lg:group-hover:hidden'/>
                <span className='text-2xl text-teal-300 font-bold lg:hidden lg:group-hover:block lg:text-xl lg:pt-1'>Home Page</span>
              </Link>
            </li>
            <li className='bg-purple-400 h-max pb-4 pt-4 rounded-lg lg:bg-inherit'>
              <Link to='/about' onClick={navHandler} className='group'>
                <FcAbout className='hidden lg:block lg:w-8 lg:h-8 lg:text-teal-300 lg:group-hover:hidden'/>
                <span className='text-2xl text-teal-300 font-bold lg:hidden lg:group-hover:block lg:text-xl lg:pt-0'>About Me</span>
              </Link>
            </li>
            <li className='bg-purple-400 h-max pb-4 pt-4 rounded-lg lg:bg-inherit'>
              <Link to='/contact' onClick={navHandler} className='group'>
                <GrContact className='hidden lg:block lg:w-8 lg:h-8 lg:text-teal-300 lg:group-hover:hidden'/>
                <span className='text-2xl text-teal-300 font-bold lg:hidden lg:group-hover:block lg:text-xl lg:pt-0'>Contact Me</span>
              </Link>
            </li>
            <li className='bg-purple-400 h-max pb-4 pt-4 rounded-lg lg:bg-inherit'>
              <Link to='/projects' onClick={navHandler} className='group'>
                <GrProjects className='hidden lg:block lg:w-8 lg:h-8 lg:text-teal-300 lg:group-hover:hidden'/>
                <span className='text-2xl text-teal-300 font-bold lg:hidden lg:group-hover:block lg:text-xl lg:pt-0'>My Projects</span>
              </Link>  
            </li>
          </ul>
          <ul className='grid grid-cols-3 justify-items-center text-2xl pt-16 lg:grid-rows-3 lg:grid-cols-none lg:p-4'>
            <li className='lg:pb-6'>
              <Link to='https://mcyportfolio.com' target='_blank'>
                <FaDiscord className='text-[#5865F2]'/>
              </Link>
            </li>
            <li>
                <Link to='https://linkedin.com/in/mason-peintner' target='_blank'>
                  <FaLinkedin className='text-[#0072b1]'/>
                </Link>
            </li>
            <li>
              <Link to='https://github.com/MCPCodez' target='_blank'>
                <FaGithub className='text-[#4078c0]'/>
              </Link>
            </li>
          </ul>
        </div>
        <Outlet />
    </>
  )
}
