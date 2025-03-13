import React from 'react'

export const ImgLinks = ({ styleA, route, style, content }) => {
  return (
   <a className={styleA} href={route} target="_blank" rel="noopener noreferrer">
    <img className={style} src={content} to={route} />
   </a> 
  )
}

