import React from 'react'
import Logo from '../assets/images/isadora-logo.svg';  //importing the logo image
import Divider from './Divider.jsx';

const d = new Date();
console.log(d);

const Navbar = () => {
  return (
    <>
        <div className="flex gap-4 items-center border border-zinc-800 flex p-4">
        <img src={Logo} alt="Portfolio Logo" className="w-6 h-6"/>
        <ul className="flex gap-4">
            <li>Info</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
        <div className='flex items-center gap-2'>
          BR <Divider /> {d.toLocaleDateString()} {d.toLocaleTimeString()} {d.getHours() < 12 ? 'AM' : 'PM'}
        </div>
       </div>
    </>
  )
}

export default Navbar