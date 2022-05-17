import React from 'react'
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import './contact.css'
import Button from '../button/Button'

export default function Contact() {
  return (
    <div className='contact_container'>
     
      <div className='contact_bottom'>
        <div className='contact_bottom__details'>
          <div className='contact_top'>
            <p className='contact_subtext'>Hire Me</p>
            <h1 className='contact_maintext'>Get in Touch</h1>
          </div>
          <div className='contact_b'>
            <p>Call: <span>+234 70 3693 6113</span> </p>
            <p>WhatsApp: <span>+234 70 3693 6113</span> </p>
            <p>Email: <span>divine2christ@yahoo.com</span> </p>

            <div className='contact_bottom__icons'>
              <div>
                <BsIcons.BsTwitter />
              </div>
              <div>
                <BsIcons.BsInstagram />
              </div>
              <div>
                <BsIcons.BsBehance />   
              </div>
              <div>
                <BsIcons.BsLinkedin />
              </div>
              <div>
                <AiIcons.AiFillGithub/>
              </div>
            </div>
          </div>
        </div>
       
        <div className='contact_bottom__message'>
          <form action="">
              <input type="text" className='contact_bottom_form' placeholder='Name'/>
              <input type="text" className='contact_bottom_form'placeholder='Email'/>
              <textarea type="text" className='txtArea' placeholder='Message '/>
            <Button name='Send Message' className='btn'/>
          </form>

        </div>
      </div>
    </div>
  )
}
