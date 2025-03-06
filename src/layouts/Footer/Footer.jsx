import { LiNavBar } from "../../Components/LiNavBar/LiNavBar"
import { NavBar } from "../NavBar/NavBar"
import '../../assets/styles/BlueBar.css'
import {
        FaFacebook,
        FaWhatsapp,
        FaInstagram
       }  from 'react-icons/fa'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='blueBar'>
        <NavBar>
            <ul>
                <LiNavBar route={'/Face'} style={'a'} content={<FaFacebook className='icons'/>}/>
                <LiNavBar route={'/whats'} style={'a'}  content={<FaWhatsapp className='icons'/>}/>
                <LiNavBar route={'/Insta'} style={'a'}  content={<FaInstagram className='icons'/>}/>
            </ul>
        </NavBar>
    </footer>
  )
}

