import './hero.css';
import Button from '../button/Button';
import { useRef } from 'react';
import {useIntersection} from 'react-use';
import gsap from 'gsap';

const Hero = () => {

    // animation
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
            ease: 'power4.out',
            trigger: "#pageWrap",
        })
    }
    intersection && intersection.intersectionRatio > .75 ? slideInLeft('.hero__leftSection'): slideOutLeft('.hero__leftSection')

    // middle
    const intersectionMiddle = useIntersection(middleSection, {
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
            ease: 'power4.out',
        })
    }
    
    intersectionRight && intersectionRight.intersectionRatio > .75 ? slideInRight('.hero__rightSection'): slideOutRight('.hero__rightSection')
    // animation end
    

    return ( 
        <div className="hero container">
            <div ref={leftSection} className="hero__leftSection">
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
                        <Button name='Schedule A Call'/>
                    </div>
                </div>

               
            </div>
            

            <div className="hero__middleSection" ref={middleSection}>
                <span>
                    <p className='middleSection__content'>My experience</p>
                    <p className='middleSection__content'>download my cv</p>
                </span>
                    <hr/>
                           
            </div>

            <div className="hero__rightSection" ref={rightSection}>
                <div className='hero__rightSection_tag'></div>
                <div className='hero__rightSection_tag'></div>
                <div className='hero__rightSection_tag'></div>
                <div className='heroImage'></div>
            </div>                    
           
        </div>
     );
}
 
export default Hero;
