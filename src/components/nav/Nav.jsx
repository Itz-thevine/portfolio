import './nav.css';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import Logo from '../../assets/logoDark.png';
import { useRef } from 'react';
import {useIntersection} from 'react-use';
import gsap from 'gsap';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as ExternalLink } from 'react-router-dom';




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
        <div className="nav container" ref={middleSection} id='nav'>
            <div className='navControl'>
                <div className="nav__name">
                    <img src={Logo} width={150} alt="" />
                </div>

                <ul className="nav__middle">
                    <li>
                        <Link to='#nav' className='nav_link'>Home</Link>
                    </li>
                    <li>
                        <Link to='#about' className='nav_link'>About me</Link>
                    </li>
                    <li>
                        <Link to='#skills' className='nav_link'>Skills</Link>
                    </li>
                    <li>
                        <Link to='#works' className='nav_link'>Works</Link>
                    </li>
                    <li>
                        <Link to='#contact' className='nav_link'>Contact</Link>
                    </li>
                </ul>

                <div className='nav__icons'>
                    <ExternalLink to={{pathname: 'https://twitter.com/ik_thevine'}} target='_blank'>
                        <div className='nav__icon'>
                            <BsIcons.BsTwitter />
                        </div>
                    </ExternalLink>
                    <div className='nav__icon'>
                        <BsIcons.BsInstagram />
                    </div>
                    <div className='nav__icon'>
                        <BsIcons.BsBehance />   
                    </div>
                    <div className='nav__icon'>
                        <BsIcons.BsLinkedin />
                    </div>
                </div>
                <div className='naav__mobileIcon'>
                    <CgIcons.CgMenuRight/> 
                </div>
                
            </div>

        </div>
     );
}
 
export default Nav;