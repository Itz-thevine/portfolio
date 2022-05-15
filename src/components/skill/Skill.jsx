import React from 'react'
import './skill.css'
import * as AiIcons from 'react-icons/ai'
import * as DiIcons from 'react-icons/di'
import * as IoIcons from 'react-icons/io'
import * as SiIcons from 'react-icons/si'
import * as VsIcons from 'react-icons/vsc'

const Card = ({icons, name}) => {

  return (
    <div className='skillContainer'>
        {
          icons === 'AiFillHtml5' && (
            <>
            <div className='skillImage'>
            <AiIcons.AiFillHtml5/>
            </div>  
            <p className='skillText'>{name}</p>
            </>
          )
        }
     
        {
          icons === 'DiCss3' && (
            <>
            <div className='skillImage'>
            <DiIcons.DiCss3/>
            </div>  
            <p className='skillText'>{name}</p>
            </>
          )
        }
     
        {
          icons === 'IoLogoJavascript' && (
            <>
            <div className='skillImage'>
            <IoIcons.IoLogoJavascript/>
            </div>  
            <p className='skillText'>{name}</p>
            </>
          )
        }
     
        {
          icons === 'DiReact' && (
            <>
            <div className='skillImage'>
            <DiIcons.DiReact/>
            </div>  
            <p className='skillText'>{name}</p>
            </>
          )
        }
     
        {
          icons === 'SiRedux' && (
            <>
            <div className='skillImage'>
            <SiIcons.SiRedux/>
            </div>  
            <p className='skillText'>{name}</p>
            </>
          )
        }
     
        {
          icons === 'SiNextdotjs' && (
            <>
            <div className='skillImage'>
            <SiIcons.SiNextdotjs/>
            </div>  
            <p className='skillText'>{name}</p>
            </>
          )
        }

        {
          icons === 'SiVuedotjs' && (
            <>
            <div className='skillImage'>
            <SiIcons.SiVuedotjs/>
            </div>  
            <p className='skillText'>{name}</p>
            </>
          )
        }

        {
          icons === 'VscJson' && (
            <>
            <div className='skillImage'>
            <VsIcons.VscJson/>
            </div>  
            <p className='skillText'>{name}</p>
            </>
          )
        }
     
        {
          icons === 'SiBootstrap' && (
            <>
            <div className='skillImage'>
            <SiIcons.SiBootstrap/>
            </div>  
            <p className='skillText'>{name}</p>
            </>
          )
        }

        {
          icons === 'SiTailwindcss' && (
            <>
            <div className='skillImage'>
            <SiIcons.SiTailwindcss/>
            </div>  
            <p className='skillText'>{name}</p>
            </>
          )
        }
        
        {
          icons === 'SiNpm' && (
            <>
            <div className='skillImage'>
            <SiIcons.SiNpm/>
            </div>  
            <p className='skillText'>{name}</p>
            </>
          )
        }
     
        {
          icons === 'SiAdobephotoshop' && (
            <>
            <div className='skillImage'>
            <SiIcons.SiAdobephotoshop/>
            </div>  
            <p className='skillText'>{name}</p>
            </>
          )
        }
     
        {
          icons === 'SiAdobeillustrator' && (
            <>
            <div className='skillImage'>
            <SiIcons.SiAdobeillustrator/>
            </div>  
            <p className='skillText'>{name}</p>
            </>
          )
        }
     
        {
          icons === 'SiAdobexd' && (
            <>
            <div className='skillImage'>
            <SiIcons.SiAdobexd/>
            </div>  
            <p className='skillText'>{name}</p>
            </>
          )
        }
     
        {
          icons === 'SiFigma' && (
            <>
            <div className='skillImage'>
            <SiIcons.SiFigma/>
            </div>  
            <p className='skillText'>{name}</p>
            </>
          )
        }
     
        
     
    </div>
  )
}

export default Card