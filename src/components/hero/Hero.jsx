import React, { useState } from 'react';
import './hero.css';
import LatestWork1 from '../../assets/latest1.png';
import LatestWork2 from '../../assets/latest2.png';
import LatestWork3 from '../../assets/latest3.png';
// import OpaqueImage from '../../assets/text.png'

const Hero = () => {

    const [images, setImages] = useState([
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
            picture: LatestWork3,
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
            picture: LatestWork3,
            alt: "latest-photo"
        }
    ])

    return ( 
        <div className="hero container">
             <div className="hero__leftSection">
                <div className="leftSection__absolute">
                    {/* <p>missed advice my it no sister</p>
                    <hr className="rightSection__blueLine" /> */}
                </div>
                <h1 className="hero__leftSectionHeading">
                    About me
                </h1>

                <div className="hero__leftSectionParagraphDiv">
                    <p>Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. </p>

                    <p>
                    At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. Detract yet delight written farther his general.
                    </p>
                </div>

                <button>
                    schedule a call
                </button>

                <div className="hero__latestWork">
                    <h2>Latest Work</h2>

                    <div className="hero__latestWorkRow">
                            {images.map(img => (
                                <img  key={img.id} src={img.picture} alt={img.alt} />
                            ))}
                    </div>
                </div>
            </div>
            

            <div className="hero__middleSection">
                <span>
                    <p className='middleSection__content'>my process</p>
                    <p className='middleSection__content'>client reviews </p>
                    <p className='middleSection__content'>download cv</p>
                </span>
                    <hr/>
            </div>

            <div className="hero__rightSection">
                <div className='heroImage'></div>
            </div>                    
           
        </div>
     );
}
 
export default Hero;
