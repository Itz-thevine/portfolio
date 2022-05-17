import './nav.css';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import Logo from '../../assets/logoDark.png';



const Nav = () => {

    return ( 
        <div className="nav container">
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