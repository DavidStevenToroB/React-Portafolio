import React from 'react'
import './NavBar.css'

export const NavBar = ({ children }) => {
    return (
        <nav className='navBar'>
            {children}
        </nav>
    )
}


