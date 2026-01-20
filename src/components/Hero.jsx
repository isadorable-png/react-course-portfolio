import React from 'react'
import ProfilePicture from '../assets/images/my-profile-picture.png';

const Hero = ( {name, role, expTime}) => {
  return (
    <>
      <div className='bg-card-bg border border-zinc-900 flex p-5 flex-col gap-10 rounded-lg shadow-md inset-shadow-xs text-light'>
      <div className='text-zinc-400'> # --------- Summary --------- #</div>
        <div className='flex gap-4'>
        <img src={ProfilePicture} alt="Profile Picture" />
        <div className='flex flex-col gap-4 h-full justify-between'>
          <div>
              <div className='text-zinc-400'>user<span className='text-pink-500'>.</span>name</div>
              <div className='text-zinc-50'>{name}</div>
          </div>
          <div>
              <div className='text-zinc-400'>user<span className='text-pink-500'>.</span>role</div>
              <div className='text-zinc-50'>{role}</div>
          </div>
          <div>
              <div className='text-zinc-400'>user<span className='text-pink-500'>.</span>expTime</div>
              <div className='text-zinc-50'>{expTime}</div>
          </div>
        </div>
        </div>

        <div className='flex flex-col gap-2'>
            <div className='text-zinc-400'> # --------- Bio --------- #</div>
              <div className='list-disc list-inside flex flex-col gap-2 text-lg text-zinc-50'>
                <p>
                  Product generalist and <span className='text-pink-500'>curious problem-solver</span> working across design, product management, and code.
                I help clients across industries build strategic products by translating complex problems into thoughtful, usable solutions.
                </p>
            </div>
        </div>
        <div>
          <div className='text-zinc-400'> # --------- Links --------- #</div>
            <p>git init</p>
            <p>git clone github.com/isadorable-png</p>
      </div> 
    </div>
    </>

  )
}

export default Hero