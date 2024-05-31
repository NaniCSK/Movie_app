import React from 'react'
import Logo from '../Logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border-b-2 space-x-4 items-center pl-4 py-2'>
        <img className='w-[50px] ' src={Logo}/>

        <Link to='/' className='hover:underline text-blue-500 text-xl font-bold'>Movies</Link>

        <Link to='/Watchlist' className='hover:underline text-blue-500 text-xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar