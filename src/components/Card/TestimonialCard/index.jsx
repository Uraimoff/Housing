import React from 'react'
import "./style.css"

function TestimonialCard({opinion, avatar, name, profession}) {
  return (
    <>
        <div className='testWrapper'>
            <div className='testopinion'>{opinion}</div>
            <div className='infoWr'>
                <div className='avatarWr'>
                <img className='avatarImg' src={avatar} alt=''/>
                </div>
                <div className='nametest'>{name}</div>
                <div className="nameprof">{profession}</div>
            </div>
        </div>
    </>
  )
}

export default TestimonialCard