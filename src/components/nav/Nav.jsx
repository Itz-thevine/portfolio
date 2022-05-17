import React, { useState, useEffect } from 'react';
import './nav.css';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import Logo from '../../assets/logoDark.png';



const Nav = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }
    return ( 
        <div className="nav container">
            <div className='navControl'>
                <div className="nav__name">
                    <img src={Logo} width={150} alt="" />
                </div>

                <ul className="nav__middle" id={click ? "nav__hidden" : ""}>
                    <li onClick={() => setClick(!click)}>Home</li>
                    <li onClick={() => setClick(!click)}>About me</li>
                    <li onClick={() => setClick(!click)}>Skills</li>
                    <li onClick={() => setClick(!click)}>Works</li>
                    <li onClick={() => setClick(!click)}>Contact</li>
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