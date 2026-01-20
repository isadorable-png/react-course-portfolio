import React from 'react'
// Option 1: Named import (recommended)
import { Github } from '@nsmr/pixelart-react'

const SocialCard = () => {
  return (
    <>
    <div className='flex gap-3'>
        <a className='border border-zinc-800 p-4 flex gap-4 hover:bg-zinc-900 transition-all duration-500' href="https://github.com/isadorable-png" target="_blank">
        <Github size={24} />
        </a>
        <a className='border border-zinc-800 p-4 flex gap-4 hover:bg-zinc-900 transition-all duration-500' href="https://github.com/isadorable-png" target="_blank">
        <Github size={24} />
        </a>
        <a className='border border-zinc-800 p-4 flex gap-4 hover:bg-zinc-900 transition-all duration-500' href="https://github.com/isadorable-png" target="_blank">
        <Github size={24} />
        </a>
    </div>
    </>
  )
}

export default SocialCard