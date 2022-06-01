import React from 'react'
import './worksCard.css'
import * as AiIcons from 'react-icons/ai'
import * as FiIcons from 'react-icons/fi'

const WorksCard = ({im, title, sub, type, tech}) => {
  return (
    <div className='worksCard'>
        {
            type === 'Web' && (
                <>
                    <div className='worksImage'>
                        <img src={im} alt="" height={200} className='controlImage' />
                        <div className='redirec'>
                        </div>
                        <div className='redirec_icon'>
                            <AiIcons.AiFillGithub/>
                        </div>
                    </div>
                    <div className='worke'>
                        <div className='workTitle'>
                            <div>
                                <p className='titleOfWork'>{title}</p>
                                <p className='subOfWork'>{sub}</p>
                            </div>
                            <div>
                                {type}
                            </div>
                        </div>
                        <div className='techOfWork'>
                            <p className='tech'>Technologies:</p>
                            {
                                // console.log(tech)
                                tech.map((technology , i) => (
                                    <div key={i} className='techies'>{technology}</div>
                                ))
                            }
                        </div>
                    </div>
                </>
        )}
            
            
        {
            type === 'Branding'  && ( 
            <>
                <div className='worksImage'>
                    <img src={im} alt="" height={200} className='controlImage' />
                    <div className='redirec'>
                    </div>
                    <div className='redirec_icon'>
                        <AiIcons.AiFillBehanceCircle/>
                    </div>
                </div>
                <div className='worke'>
                    <div className='workTitle'>
                        <div>
                            <p className='titleOfWork'>{title}</p>
                            <p className='subOfWork'>{sub}</p>
                        </div>
                        <div>
                            {type}
                        </div>
                    </div>
                    <div className='techOfWork'>
                        <p className='tech'>Software:</p>
                        {
                        
                            
                            tech.map((technology , i) => (
                                <div key={i} className='techies'>{technology}</div>
                            ))
                        }
                    </div>
                </div>
            </>
            
        )}

        {
            type === 'UI'  && ( 
                <>
                    <div className='worksImage'>
                        <img src={im} alt="" height={200} className='controlImage' />
                        <div className='redirec'>
                        </div>
                        <div className='redirec_icon'>
                            <FiIcons.FiFigma/>
                        </div>
                    </div>
                    <div className='worke'>
                        <div className='workTitle'>
                            <div>
                                <p className='titleOfWork'>{title}</p>
                                <p className='subOfWork'>{sub}</p>
                            </div>
                            <div>
                                {type}
                            </div>
                        </div>
                        <div className='techOfWork'>
                            <p className='tech'>Software:</p>
                            {
                            
                                
                                tech.map((technology , i) => (
                                    <div key={i} className='techies'>{technology}</div>
                                ))
                            }
                        </div>
                    </div>
                </>
            )

        }
    </div>
  )
}

export default WorksCard