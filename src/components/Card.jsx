import React from 'react'

function Card({ title, description, tags, image }) {
  return (
    <>
      <div className="flex gap-6 items-center border border-zinc-800 flex p-4 hover:bg-zinc-900 transition-all duration-300">
      <img src={image} alt="Project Image" />
        <div className="flex flex-col justify-between h-full">
          <div>
            <p>{title}</p>
            <p className='text-zinc-400'>{tags}</p>
          </div>
          <div>
            <p className='text-zinc-400'>
              {description}
            </p>
          </div>
        </div>
      </div>	
    </>
  )
}

export default Card