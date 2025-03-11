import React from 'react'
import { Main } from '../../layouts/Main/Main'
import { PText } from "../../Components/PText/PText";

export const Experiences = () => {
  return (
    <Main style={'section'} >
      <div className=''>
        <h2>Titulos</h2>
        <PText style={''} contentText={'Bachiller Tecnico en programacion de software'} />
        <PText style={''} contentText={'Tegnologo en analisis y desarrollo de software'} />
      </div>
      <div className=''>
        <h2>Reconocimientos</h2>
        <PText style={''} contentText={'Mencion de honor por excelencia en el area de programacion'} />
      </div>
    </Main>
  )
}

