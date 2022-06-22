import React, { useRef, useState, useEffect } from 'react'
import './works.css'
import {useIntersection} from 'react-use';
import gsap from 'gsap';
import WorksCard from '../worksCard/WorksCard';
import db from '../../data/workData'
import * as BsIcons from 'react-icons/bs'

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
    threshold: getval(width)
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

workIntersectionMiddle && workIntersectionMiddle.intersectionRatio > getval(width) ? workSlideInMiddle('.workContainer'): workSlideOutMiddle('.workContainer')
  // animattion on entry ends 

  // the selection of skill
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

  // the modal
  const [work, setWork] = useState(false)

  const handleWork = () => {
    setWork(true)
  }

  const removeWork = () =>{
    setWork(false)
  }


  return (
    <>
      <div className='workContainer' ref={workMiddleSection} id='works'>
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
                  Array.apply(null, { length: 6 }).map((e, i) => (
                    <WorksCard key={i} im={db[i].image} title={db[i].title} sub={db[i].sub} type={db[i].type} tech={db[i].tech} project={db[i].project} github={db[i].github}/>
                  ))
                )
              }

              {
                current === 'web' &&(
                  Array.apply(null, { length: 10 }).map((e, i) => (
                  db[i].type === 'Web' &&  <WorksCard key={db[i].id} im={db[i].image} title={db[i].title} sub={db[i].sub} type={db[i].type} tech={db[i].tech} project={db[i].project} github={db[i].github}/>
                  ))
                )
              }
              {
                current === 'branding' &&(
                  Array.apply(null, { length: 10 }).map((e, i) => (
                  db[i].type === 'Branding' &&  <WorksCard key={db[i].id} im={db[i].image} title={db[i].title} sub={db[i].sub} type={db[i].type} tech={db[i].tech}/>
                  ))
                )
              }
            
              {
                current === 'ui' &&(
                  Array.apply(null, { length: 10 }).map((e, i) => (
                  db[i].type === 'UI' &&  <WorksCard key={db[i].id} im={db[i].image} title={db[i].title} sub={db[i].sub} type={db[i].type} tech={db[i].tech}/>
                  ))
                )
              }
            
            </div>
            <div className='more'>
              <p onClick={handleWork}>See more </p>
              <div onClick={handleWork}>
                <BsIcons.BsArrowRight/>
                </div>
              </div>
          </div>
        </div>
      </div>
      {work && (
        <div>
            <div className='workView' onClick={removeWork}>
            </div>
            <div className='workViewContainer newcontain'>
                <div className='expContainer'>
                <div className='workMaintext workviewFull' style={{marginTop: '0'}}>
                  <p className='about_SkillLeft_subtext'>I Build Real Value</p>
                  <h1 className='about_SkillLeft_maintext'>My works</h1>
                </div>

                <div className='genWork'>
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
                </div>
                
                <div className='workLength'>
                  <div className='workDisplayWrapper'>
                    {
                      current === 'all' &&(
                        db.map(datum =>(
                          <WorksCard key={datum.id} im={datum.image} title={datum.title} sub={datum.sub} type={datum.type} tech={datum.tech} project={datum.project} github={datum.github} />
                        ))
                      )
                    }
                    {
                      current === 'web' &&(
                        db.map(datum =>(
                        datum.type === 'Web' &&  <WorksCard key={datum.id} im={datum.image} title={datum.title} sub={datum.sub} type={datum.type} tech={datum.tech} project={datum.project} github={datum.github}/>
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
                </div>

              </div>
            </div>
        </div>
      ) }
    </>
  )
}

export default Works