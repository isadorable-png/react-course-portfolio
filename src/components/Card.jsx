import React from 'react'

function Card({ project }) {
  return (
    <>
      <div>
      </div>
      <div className="group flex gap-6 items-center border border-zinc-800 p-4 hover:bg-zinc-900 transition-all duration-500">
        <img src={project.imageUrl} alt="Project Image" />
        <div className="flex flex-col justify-between h-full">
          <div>
            <p>{project.name}</p>
            <p className='text-zinc-400'>{project.tags}</p>
          </div>
          <div>
            <p className="text-zinc-400 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500 ease-in-out">
              {project.description}
            </p>
          </div>
        </div>
      </div>	
    </>
  )
}

export default Card