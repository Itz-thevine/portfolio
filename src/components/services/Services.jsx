import React from 'react'
import Service from '../service/Service'
import './services.css'

const Services = () => {
  return (
    <div className='servicesContainer'>
        <div>
            <p className='service_SkillLeft_subtext'>What I do</p>
            <h1 className='services_SkillLeft_maintext'>My services</h1>
        </div>
       <div className='servicesControl'>
            <Service title='Web Development' subtext='' icons='https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
            <Service title='UI Design' subtext='' icons='https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' />
            <Service title='Brand Identity Design' subtext='' icons='https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80' />
            <Service title='Graphics' subtext='' icons='https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
       </div>
    </div>
  )
}

export default Services