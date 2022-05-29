import React from 'react'
import './works.css'
import LatestWork1 from '../../assets/latest1.png';
import LatestWork2 from '../../assets/latest2.png';
import { useRef } from 'react';
import {useIntersection} from 'react-use';
import gsap from 'gsap';

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


  const images = [
    {
        id: 1, 
        picture: LatestWork1,
        alt: "latest-photo"
    }, 
    {
        id: 2, 
        picture: LatestWork2,
        alt: "latest-photo"
    },
    {
        id: 3, 
        picture: LatestWork2,
        alt: "latest-photo"
    },
    {
        id: 4, 
        picture: LatestWork1,
        alt: "latest-photo"
    },
    {
        id: 5, 
        picture: LatestWork2,
        alt: "latest-photo"
    },
    {
        id: 6, 
        picture: LatestWork1,
        alt: "latest-photo"
    },
    {
        id: 7, 
        picture: LatestWork1,
        alt: "latest-photo"
    },
    {
        id: 8, 
        picture: LatestWork1,
        alt: "latest-photo"
    },
    {
        id:9, 
        picture: LatestWork1,
        alt: "latest-photo"
    }
  ]


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
          {images.map(img => (
            <div key={img.id} className='workDisplayWrapper'>
                <img src={img.picture} alt={img.alt} width={170} height={130} className='imgControl' />
            </div>
          ))}
          <div className='work'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works