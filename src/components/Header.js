import React from 'react'
import {NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className='bg-green-600 py-4 text-white'>
                <ul className='flex justify-center'>
                    <li className='mx-5 tracking-widest uppercase font-bold'><NavLink to="/" className='transition-colors hover:text-green-900'>Home</NavLink></li>
                    <li className='mx-5 tracking-widest uppercase font-bold'><NavLink to="/heels" className='transition-colors hover:text-green-900'>Heels</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Header
