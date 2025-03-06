import React from 'react'
import './Main.css'


export const Main = ({style, children}) => {
  return (
    <section className={style}>
      {children}
    </section>
  )
}

