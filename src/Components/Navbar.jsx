import React from 'react'
import Logo from '../movieLogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex border space-x-8 items-center pl-3 py-4' >

            <img className='w-[50px] h-[50px]' src={Logo} alt="" />
            <Link className='text-blue-500 font-bold text-2xl' to='/'>Movies</Link>
            <Link className='text-blue-500 font-bold text-2xl' to="/watchlist">Watch List</Link>
        </div>
    )
}

export default Navbar
