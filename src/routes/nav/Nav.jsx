import React from 'react'
import { Outlet } from 'react-router-dom'
import { AiTwotoneHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { GrContact } from "react-icons/gr";
import { GrProjects } from "react-icons/gr";
import { HiBarsArrowDown } from "react-icons/hi2";
import { HiOutlineBarsArrowUp } from "react-icons/hi2";

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
        <div className='absolute top-1 right-2 text-xl'>
          <HiBarsArrowDown className='' onClick={navHandler} id='unactivated'/>
          <HiOutlineBarsArrowUp className='hidden' onClick={navHandler} id='activated'/>
        </div>
        <div className='absolute animate__animated animate__fadeOutUp hidden' id='navbarid'>
          <p>Mason Yates</p>
          <ul>
            <li className='group'>
              <AiTwotoneHome className='hidden'/>
              <span className=''>Home</span>
            </li>
            <li>
              <FcAbout className='hidden'/>
              <span>About</span>
            </li>
            <li>
              <GrContact className='hidden'/>
              <span>Contact</span>
            </li>
            <li>
              <GrProjects className='hidden'/>
              <span>Projects</span>
            </li>
          </ul>
        </div>
        <Outlet />
    </>
  )
}
