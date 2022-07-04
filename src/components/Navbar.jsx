import React from 'react'
import title_logo from '../assets/logo3.png'
const Navbar = ({title}) => {
  return (
    <nav className=" w-full relative h-12 text-center mb-7">
      <div className='container mx-auto'> 
      <a href="/" className='inline-block w-full max-w-sm h-3 sm:h-4 py-1'><img src={title_logo} alt="logo" /></a>

      </div>
    </nav>
  )
}

export default Navbar