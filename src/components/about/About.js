import React from 'react'
import Skill from '../skill/Skill';
import './about.css';

const About = () => {
  return (
    <div className='aboutContainer'>
      <div className='aboutTop'>
        <div className='about_mainText'><h1>I Know That Good <span>Software</span> Means Good <span>Business</span></h1></div>

        <div className='about_subText'>
          <p>I am a brand identity designer and a web develop based in Nigeria with 2 
          years of experience in Graphics design  
          and sound knowledge of Javascript Libraries (React.Js, Next.Js and Vue.Js) </p>

          <p>
          I am passionate about constructing and maintaining partnerships that 
          results in creative wins.
          </p>
        </div>
      </div>

      <div className='about_skill'>

        <div className='about_skillLeft'>
          <p className='about_SkillLeft_subtext'>What I work with</p> 
          <h1 className='about_SkillLeft_maintext'>My Skills</h1>
        </div>



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
  )
}

export default About