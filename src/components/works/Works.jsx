import React, { useRef, useState, useEffect } from 'react'
import './works.css'
import {useIntersection} from 'react-use';
import gsap from 'gsap';
import WorksCard from '../worksCard/WorksCard';
import db from '../../data/workData'
import * as BsIcons from 'react-icons/bs'
import { HashLink as Link } from 'react-router-hash-link';

const Works = () => {

  // check screen width
  const [widthSize, setWidthSize] = useState([])
  const getWindowDimensions =() => {
    const { innerWidth: width } = window;
    return {
      width,
    };
  }

   function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }

  const {width} = useWindowDimensions()

  
  const getval = (width)=>{
    if(width > 900){
      return 0.5
    }else{
      return .25
    }
  }
  
  // middle
const workMiddleSection = useRef();
const workIntersectionMiddle = useIntersection(workMiddleSection, {
    root: null,
    rootMargin: "0px",
    threshold: .25
})


const workSlideInMiddle = (element) => {
    gsap.to(element, 2, {
        opacity: 1,
        y: '0px',
        ease: 'power4',
        stagger: {
            amount: 3
        }
    })
}

const workSlideOutMiddle = (element) => {
    gsap.to(element, 2, {
        opacity: 0,
        y: '-75px',
        ease: 'power4.out',
    })
}

workIntersectionMiddle && workIntersectionMiddle.intersectionRatio > .25 ? workSlideInMiddle('.workContainer'): workSlideOutMiddle('.workContainer')
  // animattion on entry ends 

  // the selection of skill
  const [current, setCurrent] = useState('all')

  const worksArray = []
  const clicked = (val) => {
    setCurrent(val); 
    
  }
 
  const [now, setNow] = useState(0)

  if(current === 'all'){
    db.map(d => {
      worksArray.push(d)
    })
  }else{
    db.map(d => {
      if(d.type === current){
        worksArray.push(d)
      }
    })
  }

  

  
  let remainder = worksArray.length % 6
  let divider = ''
  if(remainder > 0){
    divider = Math.trunc((worksArray.length/6) + 1)
  }else{
    divider = Math.trunc(worksArray.length/6)
  }

  var rows = [];
  for (var z = 0; z < divider; z++) {
      
      rows.push(z);
  }
  


  
  const lowest =() =>{
    let a = now * 6
    return a

  }

  const highest = () =>{
      if(now <= 0){
        let j = Math.abs(worksArray.length - 6)
        if (worksArray.length > 6) {
          return 6
        }else{
          return j
        }
      }else{
        let a = now
        let z = 0
        for (let index = 0; index < a; index++) {
            z += 6          
        }
        console.log('z: ' + z)
        console.log('length: ' + worksArray.length)
        let k = Math.abs(worksArray.length - z)
        a += 1
        if (k >= 6) {
          return (6*a)
        }else{
          return (lowest() + k )
        }
      }
  }
  
  var displayWorks = []
  for(var i = lowest() ; i < highest(); i++){
    displayWorks.push(
      <WorksCard key={i} im={worksArray[i].image} title={worksArray[i].title} sub={worksArray[i].sub} type={worksArray[i].type} tech={worksArray[i].tech} project={worksArray[i].project} github={worksArray[i].github}/>
      // console.log(worksArray[i].title)
       )

  } 
 
  const [green, setGreen] = useState('')

  return (
    <>
      <div className='workContainer' ref={workMiddleSection} id='works'>
        <div className='workMaintext'>
          <p className='about_SkillLeft_subtext'>I Build Real Value</p>
          <h1 className='about_SkillLeft_maintext'>My works</h1>
        </div>

        <div className='workTag'>
          <div  onClick={()=>{clicked('all'); setNow(0)}}>
            <div className={current === 'all' ? 'clicked' : ''}></div>
            <div className='clickText'>All</div>
          </div>
          <div onClick={()=>{clicked('Web'); setNow(0)}}>
            <div className={current === 'Web' ? 'clicked' : ''}></div>
            <div className='clickText'>Web</div>
          </div>
          <div onClick={()=>{clicked('Branding'); setNow(0)}}>
            <div className={current === 'Branding' ? 'clicked' : ''}></div>
            <div className='clickText'>Branding</div>
          </div>
          <div onClick={()=>{clicked('UI'); setNow(0)}}>
            <div className={current === 'UI' ? 'clicked' : ''}></div>
            <div className='clickText'>UI</div>
          </div>
        </div>

        <div className='workDisplay'>
          <div className='workPadding'>
          
            <div className='workDisplayWrapper'>
              {displayWorks}
            
            </div>
            <div className='more'>
             { rows.map((ro, i) => (
                <Link to='#works' key={i} onClick={()=> setNow(i)} className={now === i ?'myPagination green': 'myPagination'}>{(ro+1)}
                </Link>
              ))}
              </div>
          </div>
        </div>
      </div>
     
    </>
  )
}

export default Works