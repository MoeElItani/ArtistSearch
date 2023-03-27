import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
   return (
      <div className='bg-gray-400 h-[10vh] w-full flex items-center'>
         <Link to='/' className='text-3xl text-gray-800 font-semibold m-4'>
            Spotify Artist Search
         </Link>
      </div>
   )
}

export default Navbar
