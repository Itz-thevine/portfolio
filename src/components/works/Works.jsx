import React, { useState } from 'react'
import './works.css'
import { useRef } from 'react';
import {useIntersection} from 'react-use';
import gsap from 'gsap';
import WorksCard from '../worksCard/WorksCard';
import db from '../../data/workData'

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
  // animattion on entry ends 

  const [current, setCurrent] = useState('all')

  const clicked = (val) => {
    setCurrent(val);
  }
  const obj = {
    id: 2,
    image: 'NiishCloud',
    type: 'web',    
    title: 'Pizza Store',
    sub: "Pizza sales app",
    tech: ['Next.js', 'api', 'paypal']};

  return (
    <div className='workContainer' ref={middleSection} id='works'>
      <div className='workMaintext'>
        <p className='about_SkillLeft_subtext'>I Build Real Value</p>
        <h1 className='about_SkillLeft_maintext'>My works</h1>
      </div>

      <div className='workTag'>
        <div  onClick={()=>clicked('all')}>
          <div className={current === 'all' ? 'clicked' : ''}></div>
          <div className='clickText'>All</div>
        </div>
        <div onClick={()=>clicked('web')}>
          <div className={current === 'web' ? 'clicked' : ''}></div>
          <div className='clickText'>Web</div>
        </div>
        <div onClick={()=>clicked('branding')}>
          <div className={current === 'branding' ? 'clicked' : ''}></div>
          <div className='clickText'>Branding</div>
        </div>
        <div onClick={()=>clicked('ui')}>
          <div className={current === 'ui' ? 'clicked' : ''}></div>
          <div className='clickText'>UI</div>
        </div>
      </div>

      <div className='workDisplay'>
        <div className='workPadding'>
        
          <div className='workDisplayWrapper'>
            {
              current === 'all' &&(
                db.map(datum =>(
                  <WorksCard key={datum.id} im={datum.image} title={datum.title} sub={datum.sub} type={datum.type} tech={datum.tech}/>
                ))
              )
            }
            {
              current === 'web' &&(
                db.map(datum =>(
                 datum.type === 'Web' &&  <WorksCard key={datum.id} im={datum.image} title={datum.title} sub={datum.sub} type={datum.type} tech={datum.tech}/>
                ))
              )
            }
            {
              current === 'branding' &&(
                db.map(datum =>(
                 datum.type === 'Branding' &&  <WorksCard key={datum.id} im={datum.image} title={datum.title} sub={datum.sub} type={datum.type} tech={datum.tech}/>
                ))
              )
            }
           
            {
              current === 'ui' &&(
                db.map(datum =>(
                 datum.type === 'UI' &&  <WorksCard key={datum.id} im={datum.image} title={datum.title} sub={datum.sub} type={datum.type} tech={datum.tech}/>
                ))
              )
            }
           
          </div>
          <div className='work'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works