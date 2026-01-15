import React from 'react'
import { Camera } from "@nsmr/pixelart-react";

function Card({ project }) {
  return (
    <>
      <div>
      </div>
      <div className="flex gap-6 items-center border border-zinc-800 flex p-4 hover:bg-zinc-900 transition-all duration-300">
      <img src={project.imageUrl} alt="Project Image" />
        <div className="flex flex-col justify-between h-full">
          <div>
            <p>{project.name}</p>
            <p className='text-zinc-400'>{project.tags}</p>
          </div>
          <div>
          <Camera className="w-6 h-6 text-zinc-400" />
            <p className='text-zinc-400'>
              {project.description}
            </p>
          </div>
        </div>
      </div>	
    </>
  )
}

export default Card
