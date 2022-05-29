import './nav.css';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import Logo from '../../assets/logoDark.png';
import { useRef } from 'react';
import {useIntersection} from 'react-use';
import gsap from 'gsap';




const Nav = () => {
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
            y: '-50px',
            ease: 'power4',
        })
    }

    intersectionMiddle && intersectionMiddle.intersectionRatio > .5 ? slideInMiddle('.nav'): slideOutMiddle('.nav')
    

    return ( 
        <div className="nav container" ref={middleSection}>
            <div className='navControl'>
                <div className="nav__name">
                    <img src={Logo} width={150} alt="" />
                </div>

                <ul className="nav__middle">
                    <li>Home</li>
                    <li>About me</li>
                    <li>Skills</li>
                    <li>Works</li>
                    <li>Contact</li>
                </ul>

                <div className='nav__icons'>
                    <BsIcons.BsTwitter />
                    <BsIcons.BsInstagram />
                    <BsIcons.BsBehance />   
                    <BsIcons.BsLinkedin />
                </div>
                <div className='naav__mobileIcon'>
                    <CgIcons.CgMenuRight/> 
                </div>
                
            </div>

        </div>
     );
}
 
export default Nav;