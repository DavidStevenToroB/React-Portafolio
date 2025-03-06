import React from 'react'
import { NavLink } from 'react-router-dom'
import './LiNavBar.css'

export const LiNavBar = ({content = 'newClass', style, route}) => {
  return (
    <li>
        <NavLink className={style} to={route}>{content}</NavLink>
    </li>
  )
}

 
