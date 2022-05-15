import React from 'react'
import './service.css'
import * as DiIcons from 'react-icons/di'

function Service() {
  return (
    <div className='serviceContainer'>
        <div className='service_icon'>
            <DiIcons.DiCode/>
        </div>
        <h1 className='service_mainText'>Graphics Design</h1>
        <p className='service_subText'>I create captivating and high quality graphics and logo designs where user readability, coupled with best design practices are prioritized </p>
    </div>
  )
}

export default Service