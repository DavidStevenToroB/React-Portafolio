import React from 'react'
import './Main.css'

export const Main = ({content}) => {
  return (
    <main className='main'>
            <h2>BLASPHEMOUS</h2>
            <img src={content} alt="penitente" />
    </main>
  )
}


