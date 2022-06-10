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


    // mobile menu
    const [menu, setMenu] = useState(false);

    const toggleMenu = (value) => {
            setMenu(!value)
    }

    console.log(menu)
    

    return ( 
        <div className="nav container" ref={middleSection} id='nav'>
            <div className='navControl'>
                <div className="nav__name">
                    <Link to='#hero'>
                        <img src={Logo} width={150} alt="" />
                    </Link>
                </div>

                <ul className={menu ? "nav__middle showMenu" : "hideMenu"}>
                    <li>
                        <Link to='#hero' className='nav_link'>Home</Link>
                    </li>
                    <li>
                        <Link to='#about' className='nav_link'>About me</Link>
                    </li>
                    <li>
                        <Link to='#skill' className='nav_link'>Skills</Link>
                    </li>
                    <li>
                        <Link to='#works' className='nav_link'>Works</Link>
                    </li>
                    <li>
                        <Link to='#contact' className='nav_link'>Contact</Link>
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