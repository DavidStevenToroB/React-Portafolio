import React from 'react'
import './Home.css'
import imgMe from '../../assets/Img/image.png'
import { Main } from '../../layouts/Main/Main'
import { PText } from "../../Components/PText/PText";



export const Home = () => {
  return (
      <Main style={'section'} content={imgMe}>
        <img className='img' src={imgMe} alt="" />
        <div >
          <PText style={'p'} contentText={'hola'} />
          <PText style={'p'} contentText={'me llamo david'} />
          <PText style={'p'} contentText={'descripcion...'} />
        </div>
      </Main>
  )
}

