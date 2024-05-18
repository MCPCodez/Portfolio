import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Nav() {
  return (
    <>
        <div>NavBar</div>
        <Outlet />
    </>
  )
}
