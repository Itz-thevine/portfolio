import './nav.css';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import * as AiIcons from 'react-icons/ai';
import Logo from '../../assets/logoDark.png';
import { useRef, useState } from 'react';
import {useIntersection} from 'react-use';
import gsap from 'gsap';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as ExternalLink } from 'react-router-dom';




const Nav = () => {
    const navMiddleSection = useRef();


    // middle
    const navIntersectionMiddle = useIntersection(navMiddleSection, {
        root: null,
        rootMargin: "0px",
        threshold: .5
    })

    
    const navSlideInMiddle = (element) => {
        gsap.to(element, 2, {
            opacity: 1,
            y: '0px',
            ease: 'power4',
        })
    }

    const navSlideOutMiddle = (element) => {
        gsap.to(element, 2, {
            opacity: 0,
            y: '-50px',
            ease: 'power4',
        })
    }

    navIntersectionMiddle && navIntersectionMiddle.intersectionRatio > .5 ? navSlideInMiddle('.nav'): navSlideOutMiddle('.nav')


    // mobile menu
    const [menu, setMenu] = useState(false);

    const toggleMenu = (value) => {
            setMenu(!value)
    }

    console.log(menu)
    

    return ( 
        <div className={menu ? 'nav container addnavH' : 'nav container'} ref={navMiddleSection} id='nav'>
            <div className='navControl'>
                <div className="nav__name">
                    <Link to='#hero' onClick={() => toggleMenu(menu)}>
                        <img src={Logo} width={150} alt="" />
                    </Link>
                </div>

                <ul className={menu ? "nav__middle showMenu" : "hideMenu"}>
                    <li>
                        <Link to='#hero' className='nav_link' onClick={() => toggleMenu(menu)}>Home</Link>
                    </li>
                    <li>
                        <Link to='#about' className='nav_link' onClick={() => toggleMenu(menu)}>About me</Link>
                    </li>
                    <li>
                        <Link to='#skill' className='nav_link' onClick={() => toggleMenu(menu)}>Skills</Link>
                    </li>
                    <li>
                        <Link to='#works' className='nav_link' onClick={() => toggleMenu(menu)}>Works</Link>
                    </li>
                    <li>
                        <Link to='#contact' className='nav_link' onClick={() => toggleMenu(menu)}>Contact</Link>
                    </li>
                </ul>

                <div className='nav__icons'>
                    <a href='https://twitter.com/ik_thevine' target='_blank'>
                        <div className='nav__icon'>
                            <BsIcons.BsTwitter />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/ik_thevine/" target='_blank'>
                        <div className='nav__icon'>
                            <BsIcons.BsInstagram />
                        </div>
                    </a>
                    <a href="https://www.behance.net/ik_thevine" target='_blank'>
                        <div className='nav__icon'>
                            <BsIcons.BsBehance />   
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/ikechukwu-divine-38a885222/" target='_blank'>
                        <div className='nav__icon'>
                            <BsIcons.BsLinkedin />
                        </div>
                    </a>
                    <a href="https://github.com/Itz-thevine" target='_blank'>
                        <div className='nav__icon'>
                            <AiIcons.AiFillGithub/>
                        </div>
                    </a>

                </div>
                <div className={menu ? 'naav__mobileIcon open_nav' : 'naav__mobileIcon'} onClick={() => toggleMenu(menu)}>
                    <CgIcons.CgMenuRight/> 
                </div>
                
            </div>

        </div>
     );
}
 
export default Nav;