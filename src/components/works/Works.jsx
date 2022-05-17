import React from 'react'
import './works.css'
import LatestWork1 from '../../assets/latest1.png';
import LatestWork2 from '../../assets/latest2.png';


const Works = () => {

  const images = [
    {
        id: 1, 
        picture: LatestWork1,
        alt: "latest-photo"
    }, 
    {
        id: 2, 
        picture: LatestWork2,
        alt: "latest-photo"
    },
    {
        id: 3, 
        picture: LatestWork2,
        alt: "latest-photo"
    },
    {
        id: 4, 
        picture: LatestWork1,
        alt: "latest-photo"
    },
    {
        id: 5, 
        picture: LatestWork2,
        alt: "latest-photo"
    },
    {
        id: 6, 
        picture: LatestWork1,
        alt: "latest-photo"
    },
    {
        id: 7, 
        picture: LatestWork1,
        alt: "latest-photo"
    },
    {
        id: 8, 
        picture: LatestWork1,
        alt: "latest-photo"
    },
    {
        id:9, 
        picture: LatestWork1,
        alt: "latest-photo"
    }
  ]


  return (
    <div className='workContainer'>
      <div className='workMaintext'>
        <p className='about_SkillLeft_subtext'>I Build Real Value</p>
        <h1 className='about_SkillLeft_maintext'>My works</h1>
      </div>

      <div className='workTag'>
        <div>All</div>
        <div>web</div>
        <div>Branding</div>
        <div>UI</div>
      </div>

      <div className='workDisplay'>
        <div className='workPadding'>
          {images.map(img => (
            <div key={img.id} className='workDisplayWrapper'>
                <img src={img.picture} alt={img.alt} width={170} height={130} className='imgControl' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works