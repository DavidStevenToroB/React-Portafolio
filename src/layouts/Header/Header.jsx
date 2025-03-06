import React from 'react'
import { NavBar } from "../NavBar/NavBar"
import { LiNavBar } from "../../Components/LiNavBar/LiNavBar";
import '../../assets/styles/BlueBar.css'
import './Header.css'


export const Header = () => {
    return (
        <header className='blueBar' id='header'>
            <h1>Instrucciones react 2025</h1>
            <NavBar>
                <ul>
                    <LiNavBar route={'/'} style={'a'} content='home'/>
                    <LiNavBar route={'/class1'} style={'a'} content='clase1'/>
                    <LiNavBar route={'class2'} style={'a'} content='clase2'/>
                </ul>
            </NavBar>
        </header>
    )
}


