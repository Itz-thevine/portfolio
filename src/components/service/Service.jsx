import React from 'react'
import './service.css'

function Service({title, subtext, icons}) {
  return (
    <div className='serviceContainer'>
        <img src={icons} width={200} height={100} alt="" className='imgStyle'/>
        <h1 className='service_mainText'>{title}</h1>
        <p className='service_subText'>{subtext} </p>
    </div>
  )
}

export default Service