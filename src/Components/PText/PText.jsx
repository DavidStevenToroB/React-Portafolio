import React from 'react'

export const PText = ({style, contentText, id}) => {
  return (
    <p className={style} id={id}>{contentText}</p>
  )
}
