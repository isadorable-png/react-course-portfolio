import React from 'react'
import ProfilePicture from '../assets/images/my-profile-picture.png';

const Hero = ( {name, role, expTime}) => {
  return (
    <div className='border border-zinc-800 flex p-4 flex gap-4'>
      <img src={ProfilePicture} alt="Profile Picture" />
      <div className='flex flex-col gap-4'>
        <div>
            <div className='text-zinc-400'>Name:</div>
            <div className='text-zinc-50'>{name}</div>
        </div>
        <div>
            <div className='text-zinc-400'>Role:</div>
            <div className='text-zinc-50'>{role}</div>
        </div>
        <div>
            <div className='text-zinc-400'>Exp Time:</div>
            <div className='text-zinc-50'>{expTime}</div>
        </div>
      </div>
    </div>
  )
}

export default Hero