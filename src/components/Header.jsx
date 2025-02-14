import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex container mx-auto h-20 items-center gap-8'> 
      <Link to={"/"} className='text-2xl font-medium flex-1'>Logoo</Link>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
    </div>
  )
}

export default Header