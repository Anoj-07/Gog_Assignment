import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='flex flex-row justify-end items-center gap-5 p-10 bg-gray-50'>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About Us</Link>
            <Link to={"/contact"}>Contact Us</Link>
            <Link to={"/login"}>Login</Link>
        </div>
    </div>
  )
}

export default Navbar