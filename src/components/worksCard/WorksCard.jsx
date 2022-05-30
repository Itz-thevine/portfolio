import React from 'react'
import './worksCard.css'

const WorksCard = () => {
  return (
        <div className='worksCard'>
            <div className='worksImage'>
            <img src="https://images.unsplash.com/photo-1638913662180-afc4334cf422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""  width={350} height={200} />
            </div>
            <div className='worke'>
                <div className='workTitle'>
                    <div>
                        <p className='titleOfWork'>Pizza store</p>
                        <p className='subOfWork'>pizza ordering app</p>
                    </div>
                    <div>
                        Web
                    </div>
                </div>
                <div className='techOfWork'>
                    <p className='tech'>Technologies:</p>
                    <div className='techies'>React</div>
                    <div className='techies'>Api</div>
                    <div className='techies'>router</div>
                    <div className='techies'>React</div>
                    <div className='techies'>React</div>
                    <div className='techies'>React</div>
                </div>
            </div>
        </div>
  )
}

export default WorksCard