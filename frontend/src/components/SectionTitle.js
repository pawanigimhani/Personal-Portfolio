import React from 'react'

function SectionTitle(
    {title}
) {
  return (
    <div className='flex items-center gap-10 py-10'>
        <h1 className='text-3xl sm:text-2xl text-white'>{title}</h1>
        <div className='w-60 sm:w-[150px] h-[1px] bg-secondary'></div>
    </div>
  )
}

export default SectionTitle