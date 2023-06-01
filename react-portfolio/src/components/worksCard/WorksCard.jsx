import React from 'react'
import './worksCard.css'
import * as AiIcons from 'react-icons/ai'
import * as FiIcons from 'react-icons/fi'

const WorksCard = ({im, title, sub, type, tech, project, github}) => {
  return (
    <div className='worksCard'>
        {
            type === 'Web' && (
                <div className='worksCardControl'>
                    <a href={project} className='worksCardControli' target='_blank'>
                        <div className='worksImage'>
                            <img src={im} alt="" height={200} className='controlImage' />
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
                    </a>
                    <a href={github} className='redirectLink' target='_blank'>
                        <div className='redirec'>
                        </div>
                        <div className='redirec_icon'>
                            <AiIcons.AiFillGithub/>
                        </div>
                    </a>
                </div>
        )}
            
            
        {
            type === 'Branding'  && ( 
            <div className='worksCardControl'>
                <a href={project} className='worksCardControli' target='_blank'>
                    <div className='worksImage'>
                        <img src={im} alt="" height={200} className='controlImage' />
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
                </a>

                <a href={github} className='redirectLink' target='_blank'>
                    <div className='redirec'>
                    </div>
                    <div className='redirec_icon'>
                        <AiIcons.AiFillBehanceCircle/>
                    </div>
                </a>
            </div>
            
        )}

        {
            type === 'UI'  && ( 
                <div className='worksCardControl'>
                    <a href={project} className='worksCardControli' target='_blank'>
                        <div className='worksImage'>
                            <img src={im} alt="" height={200} className='controlImage' />
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
                    </a>

                    <a href={github} className='redirectLink' target='_blank'>
                        <div className='redirec'>
                        </div>
                        <div className='redirec_icon'>
                            <FiIcons.FiFigma/>
                        </div>
                    </a>
                </div>
            )

        }
    </div>
  )
}

export default WorksCard