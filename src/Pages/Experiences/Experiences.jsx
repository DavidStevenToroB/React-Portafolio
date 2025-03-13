import React from 'react'
import './Experiences.css'
import { Main } from '../../layouts/Main/Main'
// import {ALinks} from '../../Components/ALinks/ALinks.jsx';

export const Experiences = () => {
  return (
    <Main style={'section'} >
      <div className=''>
        <h2>Titulos</h2>
        <ALinks style={'links'} contentText={'Bachiller Tecnico en programacion de software'} />
        <ALinks style={'links'} contentText={'Tegnologo en analisis y desarrollo de software'} />
      </div>
      <div className=''>
        <h2>Reconocimientos</h2>
        <ALinks style={'links'} contentText={'Mencion de honor por excelencia en el area de programacion'} />
      </div>
    </Main>
  )
}

