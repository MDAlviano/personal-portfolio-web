import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-4">
    <div className="flex flex-shrink-0 items-center">
        <h3 className="text-white mx-6 text-xl font-bold">Alviano</h3>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaGithub/>
        <FaInstagram/>
    </div>
  </nav>
}

export default Navbar