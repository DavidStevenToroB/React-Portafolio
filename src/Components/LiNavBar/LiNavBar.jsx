import { NavLink } from 'react-router-dom'
import React from 'react'
import './LiNavBar.css'

export const LiNavBar = ({content = 'nueva clase', route, style}) => {
  return (
    <li>
      <NavLink className={style} to={route}>{content}</NavLink>
    </li>
  )
}


