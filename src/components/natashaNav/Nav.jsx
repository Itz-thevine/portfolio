import React, { useState, useEffect } from 'react';
import './NatashaNav.css';
import * as BsIcons from 'react-icons/bs';
import Logo from '../../assets/logoDark.png';



const Nav = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }
    return ( 
        <div className="nav container">
            <div className="nav__name">
                <img src={Logo} width={150} alt="" />
            </div>

            <ul className="nav__middle" id={click ? "nav__hidden" : ""}>
                <li id="nav1" onClick={() => setClick(!click)}>portfolio</li>
                <li onClick={() => setClick(!click)}>about me</li>
                <li onClick={() => setClick(!click)}>my blog</li>
                <li onClick={() => setClick(!click)}>reviews</li>
                <li onClick={() => setClick(!click)}>contact me</li>
            </ul>

            <div className='nav__icons'>
                <BsIcons.BsTwitter />
                <BsIcons.BsInstagram />
                <BsIcons.BsVimeo />
                <BsIcons.BsBehance />   
                <BsIcons.BsLinkedin />
            </div>

            {/* <CgMenuRight 
                className='natashaNav__mobileIcon'
                onClick={handleClick}
            /> */}
        </div>
     );
}
 
export default Nav;