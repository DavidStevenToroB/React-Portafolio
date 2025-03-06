import React from 'react'

export const NavBar = ({ style ,children }) => {
    return (
        <nav className={style}>
            {children}
        </nav>
    )
}

