import React from 'react'
import './button.css'

function Button({name}) {
  return (
    <div className='btn'>{name}</div>
  )
}

export default Button