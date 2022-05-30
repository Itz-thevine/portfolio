import React from 'react'
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import './contact.css'
import Button from '../button/Button'
import { useRef } from 'react';
import {useIntersection} from 'react-use';
import gsap from 'gsap';


export default function Contact() {
  // animation
  const leftSection = useRef();
  const rightSection = useRef();

// leftSection Animation
const intersection = useIntersection(leftSection, {
  root: null,
  rootMargin: "0px",
  threshold: .75
})

const slideInLeft = (element) => {
    gsap.to(element, 2, {
        opacity: 1,
        x: '0px',
        ease: 'power4',
        stagger: {
            amount: 3
        }
    })
}
const slideOutLeft = (element) => {
    gsap.to(element, 2, {
        opacity: 0,
        x: '-100px',
        ease: 'power4.out',
        trigger: "#pageWrap",
    })
}
intersection && intersection.intersectionRatio > .75 ? slideInLeft('.contact_bottom__details'): slideOutLeft('.contact_bottom__details')

// right
const intersectionRight = useIntersection(rightSection, {
  root: null,
  rootMargin: "0px",
  threshold: .75
})

const slideInRight = (element) => {
  gsap.to(element, 2, {
      opacity: 1,
      x: '0px',
      ease: 'power4',
      stagger: {
          amount: 3
      }
  })
}

const slideOutRight = (element) => {
  gsap.to(element, 2, {
      opacity: 0,
      x: '100px',
      ease: 'power4.out',
  })
}

intersectionRight && intersectionRight.intersectionRatio > .75 ? slideInRight('.contact_bottom__message'): slideOutRight('.contact_bottom__message')
// animation end



  return (
    <div className='contact_container' id='contact'>
     
      <div className='contact_bottom'>
        <div className='contact_bottom__details' ref={leftSection}>
          <div className='contact_top'>
            <p className='contact_subtext'>Hire Me</p>
            <h1 className='contact_maintext'>Get in Touch</h1>
          </div>
          <div className='contact_b'>
            <p>Call: <span>+234 70 3693 6113</span> </p>
            <p>WhatsApp: <span>+234 70 3693 6113</span> </p>
            <p>Email: <span>divine2christ@yahoo.com</span> </p>

            <div className='contact_bottom__icons'>
              <a href='https://twitter.com/ik_thevine' target='_blank'>
                <div className='nav__icon'>
                    <BsIcons.BsTwitter />
                </div>
              </a>
              <a href="https://www.instagram.com/ik_thevine/" target='_blank'>
                  <div className='nav__icon'>
                      <BsIcons.BsInstagram />
                  </div>
              </a>
              <a href="https://www.behance.net/ik_thevine" target='_blank'>
                  <div className='nav__icon'>
                      <BsIcons.BsBehance />   
                  </div>
              </a>
              <a href="https://www.linkedin.com/in/ikechukwu-divine-38a885222/" target='_blank'>
                  <div className='nav__icon'>
                      <BsIcons.BsLinkedin />
                  </div>
              </a>
              <a href="https://github.com/Itz-thevine" target='_blank'>
                  <div className='nav__icon'>
                      <AiIcons.AiFillGithub/>
                  </div>
              </a>
            </div>
          </div>
        </div>
       
        <div className='contact_bottom__message' ref={rightSection}>
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
