import React from 'react'
import './Header.css'
import { NavBar } from '../NavBar/NavBar'
import {
        FaLinkedin,
        FaWhatsapp,
        FaInstagram
       } from 'react-icons/fa'
import { LiNavBar } from "../../Components/LiNavBar/LiNavBar";


export const Header = () => {
    return (
        <header >
            <NavBar style={'NavBar'}>
                <ul>
                    <LiNavBar route={"/"} style={'a'} content='Inicio' />
                    <LiNavBar route={"/skills"} style={'a'} content='Habilidades ' />
                    <LiNavBar route={"/experiences"} style={'a'} content='Experiencia ' />
                </ul>
            </NavBar>
            <NavBar style={'NavBarNtworks'}>
                <ul>
                    <LiNavBar route={"https://co.linkedin.com/"} style={'a'} content={<FaLinkedin className='icons'/>} />
                    <LiNavBar route={"https://www.whatsapp.com/?lang=es_LA"} style={'a'} content={<FaWhatsapp className='icons'/>} />
                    <LiNavBar route={"https://www.instagram.com/davidtor_01_?igsh=MTkyazJzeW9hdHp3OA=="} style={'a'} content={<FaInstagram className='icons'/>} />
                </ul>
            </NavBar>
        </header>
    )
}

