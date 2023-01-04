import React, {useRef} from 'react'
import Skill from '../skill/Skill';
import './about.css';
import gsap from 'gsap';
import {useIntersection} from 'react-use';

const About = () => {
const aboutLeftSection = useRef();
const aboutRightSection = useRef();
const aboutMiddleSection = useRef();

  // aboutLeftSection Animation
  const aboutIntersection = useIntersection(aboutLeftSection, {
      root: null,
      rootMargin: "0px",
      threshold: .5
  })
  const aboutSlideInLeft = (element) => {
      gsap.to(element, 2, {
          opacity: 1,
          x: '0px',
          ease: 'power4',
          stagger: {
              amount: 3
          }
      })
  }
  const aboutSlideOutLeft = (element) => {
      gsap.to(element, 2, {
          opacity: 0,
          x: '-100px',
          ease: 'power4',
      })
  }
  aboutIntersection && aboutIntersection.intersectionRatio > .5 ? aboutSlideInLeft('.about_mainText'): aboutSlideOutLeft('.about_mainText')

  // middle
  const aboutIntersectionMiddle = useIntersection(aboutMiddleSection, {
    root: null,
    rootMargin: "0px",
    threshold: .75
})

  
  const aboutSlideInMiddle = (element) => {
    gsap.to(element, 2, {
        opacity: 1,
        y: '0px',
        ease: 'power4',
    })
}

const aboutSlideOutMiddle = (element) => {
    gsap.to(element, 2, {
        opacity: 0,
        y: '-75px',
        ease: 'power4.out',
    })
}

aboutIntersectionMiddle && aboutIntersectionMiddle.intersectionRatio > .75 ? aboutSlideInMiddle('.about_skill'): aboutSlideOutMiddle('.about_skill')



  // right
  const intersectionRight = useIntersection(aboutRightSection, {
    root: null,
    rootMargin: "0px",
    threshold: .5
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
  
  intersectionRight && intersectionRight.intersectionRatio > .5 ? slideInRight('.about_subText'): slideOutRight('.about_subText')



  return (
    <div className='aboutContainer' id='about'>
      <div className='aboutTop'>
        <div className='about_mainText' ref={aboutLeftSection}><h1>I Know That Good <span>Software</span> Means Good <span>Business</span></h1></div>

        <div className='about_subText' ref={aboutRightSection}>
          <p>
          I am a frontend developer with experience in React, Vue, and Next.js. I've contributed to several open source projects and have worked on a variety of professional projects. I'm always looking to learn new technologies and techniques to improve my skills as a developer. In my free time, you can find me playing games or listening to music. <br/> Fun fact: I have written about 3 songs in my book!
          </p>

          {/* <p>
          I am passionate about constructing and maintaining partnerships that 
          results in creative wins.
          </p> */}
        </div>
      </div>

      <div className='about_skill' id='skill' ref={aboutMiddleSection}>

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