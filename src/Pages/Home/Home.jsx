import React from 'react'
import './Home.css'
import imgMe from '../../assets/Img/image.png'
import { Main } from '../../layouts/Main/Main'
import { PText } from "../../Components/PText/PText";



export const Home = () => {
  return (
      <Main style={'section'} content={imgMe}>
        <img className='img' src={imgMe} alt="" />
        <div className='divP'>
          <PText style={'pMajor'} contentText={'Hola!'} />
          <PText style={'pMedium'} contentText={''} />
          <PText style={'p'} contentText={'Soy analista y desarrollador de software, mi fuerte en la programacion web es el Backend. Me enfoco en crear una experiencia más sencilla al usuario, para garantizar un sistema confiable, seguro; todo esto de una manera intuitiba. Mis leguajes fuertes son: Java, JavaScript y Python. Tambien poseo una buena coneccion con herramientas de marcada: css y html. En mi experiencia como desarrollador, me he destacado por la rapida solucion de confiltos o problemas, ya sea en la cración de algoritmos o por fuera de estos. '} />
        </div>
      </Main>
  )
}

