import React from 'react'
import './Home.css'
import imgMe from '../../assets/Img/imgme.png'
import { Main } from '../../layouts/Main/Main'
import { PText } from "../../Components/PText/PText"



export const Home = () => {
  return (
      <Main style={'section'}>
        <img className='img' src={imgMe} alt="" />
        <div className='divP'>
          <PText style={'pMajor'} contentText={'Hola!'} />
          <PText style={'pMedium'} contentText={''} />
          <PText style={'p'} contentText={'Analista y desarrollador de software; donde mi especialidad en la programacion web es el Backend, en el cual me enfoco en crear una experiencia más accesible para el usuario, garantizando un sistema confiable, seguro e intuitivo. Los lenguajes de programación donde mayormente me destaco son: Java y JavaScript. Adicionalmente a lo anteriormente expuesto, poseo una adecuada conexion con herramientas de marcada: css y html. Por ultimo, en mi experiencia como desarrollador, me he destacado por la agil solucion de conflictos y/o problemas, ya sea en la creación de algoritmos o por fuera de estos. '} />
        </div>
      </Main>
  )
}

