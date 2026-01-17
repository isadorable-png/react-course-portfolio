import React, { useState, useEffect } from 'react'
import Logo from '../assets/images/isadora-logo.svg';

const Navbar = () => {
  const [timezone, setTimezone] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const d = new Date();
      const time = d.toLocaleTimeString();
      setTimezone(time);
    };

    updateClock(); // Call immediately
    const interval = setInterval(updateClock, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex gap-4 items-center border border-zinc-800 p-4 justify-between">
        <div className='flex gap-4 items-center'>
          <img src={Logo} alt="Portfolio Logo" className="w-6 h-6"/>
          <ul className="flex gap-4">
            <li>Info</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
        
        <div className='flex gap-2 items-center'>
          <div className='text-zinc-400'>Lang:</div>
          <div className='underline'>EN</div>
          <div className='text-zinc-400'>PT</div>
          <div className='text-zinc-400'>/</div>
          <div className='text-zinc-400'>Timezone:</div>
          <div>{timezone}</div>
        </div>
      </div>
    </>
  )
}

export default Navbar