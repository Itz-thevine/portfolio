import React, {useRef} from 'react'
import Skill from '../skill/Skill';
import './about.css';
import gsap from 'gsap';
import {useIntersection} from 'react-use';

const About = () => {
const leftSection = useRef();
const rightSection = useRef();
const middleSection = useRef();

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
          ease: 'power4',
          trigger: "#pageWrap",
      })
  }
  intersection && intersection.intersectionRatio > .75 ? slideInLeft('.about_mainText'): slideOutLeft('.about_mainText')

  // middle
  const intersectionMiddle = useIntersection(middleSection, {
    root: null,
    rootMargin: "0px",
    threshold: .75
})

  
  const slideInMiddle = (element) => {
    gsap.to(element, 2, {
        opacity: 1,
        y: '0px',
        ease: 'power4',
        stagger: {
            amount: 3
        }
    })
}

const slideOutMiddle = (element) => {
    gsap.to(element, 2, {
        opacity: 0,
        y: '-75px',
        ease: 'power4.out',
    })
}

intersectionMiddle && intersectionMiddle.intersectionRatio > .75 ? slideInMiddle('.about_skill'): slideOutMiddle('.about_skill')



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
          ease: 'power4',
      })
  }
  
  intersectionRight && intersectionRight.intersectionRatio > .75 ? slideInRight('.about_subText'): slideOutRight('.about_subText')



  return (
    <div className='aboutContainer' id='about'>
      <div className='aboutTop'>
        <div className='about_mainText' ref={leftSection}><h1>I Know That Good <span>Software</span> Means Good <span>Business</span></h1></div>

        <div className='about_subText' ref={rightSection}>
          <p>I am a brand identity designer and a web develop based in Nigeria with 2 
          years of experience in Graphics design  
          and sound knowledge of Javascript Libraries (React.Js, Next.Js and Vue.Js) </p>

          <p>
          I am passionate about constructing and maintaining partnerships that 
          results in creative wins.
          </p>
        </div>
      </div>

      <div className='about_skill' id='skill' ref={middleSection}>

        <div className='about_skillLeft'>
          <p className='about_SkillLeft_subtext'>What I work with</p> 
          <h1 className='about_SkillLeft_maintext'>My Skills</h1>
        </div>

        <div className='about_skillRight_control'>
          <div className='about_skillRight'>
            <Skill icons='AiFillHtml5' name='HTML' />
            <Skill icons='DiCss3' name='CSS'/>
            <Skill icons='IoLogoJavascript' name='javaScript'/>
            <Skill icons='DiReact' name='React Js'/>
            <Skill icons='SiRedux' name='Redux'/>
            <Skill icons='SiNextdotjs' name='Next Js'/>
            <Skill icons='SiVuedotjs' name='Vue Js'/>
            <Skill icons='VscJson' name='Json'/>
            <Skill icons='SiBootstrap' name='Boostrap'/>
            <Skill icons='SiTailwindcss' name='Tailwind'/>
            <Skill icons='SiGithub' name='Git'/>
            <Skill icons='SiNpm' name='Npm'/>
            <Skill icons='SiAdobephotoshop' name='Photoshop'/>
            <Skill icons='SiAdobeillustrator' name='Illustrator'/>
            <Skill icons='SiAdobexd' name='Adobe XD'/>
            <Skill icons='SiFigma' name='Figma'/>
          </div>
        </div>
      
          
      </div>
    </div>
  )
}

export default About