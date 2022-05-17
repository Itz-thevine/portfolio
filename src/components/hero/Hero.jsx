import './hero.css';
import LatestWork1 from '../../assets/latest1.png';
import LatestWork2 from '../../assets/latest2.png';
import Button from '../button/Button';

const Hero = () => {

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
        }
    ]

    return ( 
        <div className="hero container">
            <div className="hero__leftSection">
                <div className='hero_leftControl'>
                        <p className="hero__first">
                            Hello World! I am
                        </p>
                        <div className='leftSectionCtrl'>
                            <p className="hero__second">
                            Divine
                            </p>
                            <div className='dot'></div>
                        </div>

                        <p className='leftSection__subtext'>
                        I am a web developer and Brand identity designer. My goal is to help individuals, firms and businesses scale up and also achieve all-round goals.
                        </p>

                        <div className='btnPostiton'>
                            <Button name='Schedule A Call'/>
                        </div>
                </div>

                <div className="hero__latestWork">
                    <h2>Latest Work</h2>

                    <div className="hero__latestWorkRow">
                            {images.map(img => (
                                <div key={img.id} className='imageWrapper'>
                                    <img src={img.picture} alt={img.alt} width={170} height={130} className='imgControl' />
                                </div>
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
                <div className='hero__rightSection_tag'></div>
                <div className='hero__rightSection_tag'></div>
                <div className='hero__rightSection_tag'></div>
                <div className='heroImage'></div>
            </div>                    
           
        </div>
     );
}
 
export default Hero;
