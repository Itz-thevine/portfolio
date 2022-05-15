import React from 'react'
import Service from '../service/Service'
import './services.css'

const Services = () => {
  return (
    <div className='servicesContainer'>
        <div>
            <h1>My services</h1>
        </div>
       <div className='servicesControl'>
            <Service/>
            <Service/>
            <Service/>
       </div>
    </div>
  )
}

export default Services