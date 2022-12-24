import './hero.css';
import Button from '../button/Button';
import { useRef, useState } from 'react';
import {useIntersection} from 'react-use';
import gsap from 'gsap';
import { HashLink as Link } from 'react-router-hash-link';
import data from '../../data/expData'


const Hero = () => {
    const [experience, setExperience] = useState(false);

    const handleExperience = ()=> {
        setExperience(true)
    }

    const removeExperience = ()=>{
        setExperience(false)
    }


    // animation
    const heroLeftSection = useRef();
    const heroRightSection = useRef();
    const heroMiddleSection = useRef();

    // heroLeftSection Animation
    const heroIntersection = useIntersection(heroLeftSection, {
        root: null,
        rootMargin: "0px",
        threshold: .5
    })
    const heroSlideInLeft = (element) => {
        gsap.to(element, 2, {
            opacity: 1,
            x: '0px',
            ease: 'power4',

        })
    }
    const heroSlideOutLeft = (element) => {
        gsap.to(element, 2, {
            opacity: 0,
            x: '-100px',
            ease: 'power4.out',
        })
    }
    heroIntersection && heroIntersection.intersectionRatio > .5 ? heroSlideInLeft('.hero__leftSection'): heroSlideOutLeft('.hero__leftSection')

    // middle
    const intersectionMiddle = useIntersection(heroMiddleSection, {
        root: null,
        rootMargin: "0px",
        threshold: .5
    })

    
    const slideInMiddle = (element) => {
        gsap.to(element, 4, {
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
            y: '-100px',
            ease: 'power4.out',
        })
    }

    intersectionMiddle && intersectionMiddle.intersectionRatio > .5 ? slideInMiddle('.hero__middleSection'): slideOutMiddle('.hero__middleSection')
    


    // right
    const intersectionRight = useIntersection(heroRightSection, {
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
            ease: 'power4.out',
        })
    }
    
    intersectionRight && intersectionRight.intersectionRatio > .5 ? slideInRight('.hero__rightSection'): slideOutRight('.hero__rightSection')
    // animation end
    

    return ( 
        <div className="hero container" id='hero'>
           <div className='hero_child'>
                <div ref={heroLeftSection} className="hero__leftSection">
                        <div className='hero_leftControl'>
                            
                            <div className='leftSectionCtrl'>
                                <div className='txtControl'>
                                    <p className="hero__first">
                                        Hello World! I am
                                    </p>
                                    <p className="hero__second">
                                        Divine
                                    </p>
                                </div>
                                <div className='dot'></div>
                            </div>

                            <p className='leftSection__subtext'>
                            I am a web developer and Brand identity designer. My goal is to help individuals, firms and businesses scale up and also achieve all-round goals.
                            </p>

                            <div className='btnPostiton'>
                                <Link to='#contact'>
                                    <Button name='Hire Me'/>
                                </Link>
                            </div>
                        </div>

                    
                    </div>
                    

                <div className="hero__middleSection" ref={heroMiddleSection}>
                    {/* <span>
                        <p className='middleSection__content' onClick={handleExperience}>My experience</p>

                        <a href="https://docs.google.com/document/d/1GXq2SAkN5AkPPuFe_Q26eGGfBXhbr8W_shOO3iQxplM/edit?usp=sharing" target='_blank'><p className='middleSection__content'>download my cv</p></a>
                    </span> */}
                        <hr/>
                            
                </div>

                <div className="hero__rightSection" ref={heroRightSection}>
                    <div className='hero__rightSection_tag'></div>
                    <div className='hero__rightSection_tag'></div>
                    <div className='hero__rightSection_tag'></div>
                    <div className='heroImage'></div>
                </div>   
            </div>                 
           
          {/* {experience && (
            <div>
                <div className='experience' onClick={removeExperience}>
                </div>
                <div className='experienceContainer'>
                    <div className='expContainer'>
                        <h1>My Experience</h1>
                        <div className='experiences'>
        
                            { data.map(e=> (
                            <div key={e.id} className='exp'>   
                                <h1><span className='firm'>{e.firm}</span> - {e.role}</h1>
                                <span>{e.period}</span>
                                <ul>
                                    {
                                        e.duties.map((duty, i) =>(
                                            <li key={i}>
                                                <p>{duty}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            ))
                            }   
                        </div>
                    </div>
                </div>
            </div>
          ) } */}
        </div>
     );
}
 
export default Hero;
