import React from 'react'
import './works.css'
import { useRef } from 'react';
import {useIntersection} from 'react-use';
import gsap from 'gsap';
import WorksCard from '../worksCard/WorksCard';

const Works = () => {
  const middleSection = useRef();

// middle
const intersectionMiddle = useIntersection(middleSection, {
    root: null,
    rootMargin: "0px",
    threshold: .5
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

intersectionMiddle && intersectionMiddle.intersectionRatio > .5 ? slideInMiddle('.workContainer'): slideOutMiddle('.workContainer')
  

  return (
    <div className='workContainer' ref={middleSection} id='works'>
      <div className='workMaintext'>
        <p className='about_SkillLeft_subtext'>I Build Real Value</p>
        <h1 className='about_SkillLeft_maintext'>My works</h1>
      </div>

      <div className='workTag'>
        <div>All</div>
        <div>web</div>
        <div>Branding</div>
        <div>UI</div>
      </div>

      <div className='workDisplay'>
        <div className='workPadding'>
        
          <div className='workDisplayWrapper'>
             <WorksCard/>
             <WorksCard/>
             <WorksCard/>
             <WorksCard/>
             <WorksCard/>
          </div>
          <div className='work'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works