import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-3xl font-medium'>Abdul Sattar</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
               <li className='menuLink'><a href='#Hero'>Home</a></li>
               <li className='menuLink'><a href='#about'>About</a></li>
               <li className='menuLink'><a href='#projects'>Projects</a></li>
               <li className='menuLink'><a href='#skills'>Skills</a></li>
               <li className='menuLink'><a href='#contact'>Contact</a></li>
            </ul>
            <AiOutlineMenu size={30} />

        </div>

    </div>
  )
}

export default Navbar