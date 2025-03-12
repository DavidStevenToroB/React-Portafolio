import React from 'react'


export const Main = ({style, children}) => {
  return (
    <section className={style}>
      {children}
    </section>
  )
}

