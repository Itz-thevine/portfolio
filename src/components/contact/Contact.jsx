import React from 'react'
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import './contact.css'
import Button from '../button/Button'
import { useRef } from 'react';
import {useIntersection} from 'react-use';
import gsap from 'gsap';
import emailjs from 'emailjs-com';


export default function Contact() {
  // animation
  const contactLeftSection = useRef();
  const contactRightSection = useRef();

// contactLeftSection Animation
const contactIntersectionLeft = useIntersection(contactLeftSection, {
  root: null,
  rootMargin: "0px",
  threshold: .5
})

const contactSlideInLeft = (element) => {
    gsap.to(element, 2, {
        opacity: 1,
        x: '0px',
        ease: 'power4',
        stagger: {
            amount: 3
        }
    })
}
const contactSlideOutLeft = (element) => {
    gsap.to(element, 2, {
        opacity: 0,
        x: '-100px',
        ease: 'power4.out',
        trigger: "#pageWrap",
    })
}
contactIntersectionLeft && contactIntersectionLeft.intersectionRatio > .5 ? contactSlideInLeft('.contact_bottom__details'): contactSlideOutLeft('.contact_bottom__details')

// right
const contactIntersectionRight = useIntersection(contactRightSection, {
  root: null,
  rootMargin: "0px",
  threshold: .5
})

const contactSlideInRight = (element) => {
  gsap.to(element, 2, {
      opacity: 1,
      x: '0px',
      ease: 'power4',
      stagger: {
          amount: 3
      }
  })
}

const contactSlideOutRight = (element) => {
  gsap.to(element, 2, {
      opacity: 0,
      x: '100px',
      ease: 'power4.out',
  })
}

contactIntersectionRight && contactIntersectionRight.intersectionRatio > .5 ? contactSlideInRight('.contact_bottom__message'): contactSlideOutRight('.contact_bottom__message')
// animation end

// email submit

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  console.log(e.target)

  emailjs.sendForm('service_mqqgdtq', 'template_efygwpc', form.current, 'EOhoWlAuoDh4KT5BG')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
};

  return (
    <div className='contact_container' id='contact'>
     
      <div className='contact_bottom'>
        <div className='contact_bottom__details' ref={contactLeftSection}>
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
       
        <div className='contact_bottom__message' ref={contactRightSection}>
          <form ref={form} onSubmit={sendEmail}>
              <input type="text" className='contact_bottom_form' placeholder='Name' name='name'/>
              <input type="text" className='contact_bottom_form'placeholder='Email' name='email'/>
              <textarea type="text" className='txtArea' placeholder='Message' name='message'/>
              <input type="submit" className='btn' value='Send Message' />
            {/* <Button name='Send Message' type='submit' className='btn'/> */}
          </form>

        </div>
      </div>
    </div>
  )
}
