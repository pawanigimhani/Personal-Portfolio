import React from 'react'
import { BarLoader } from 'react-spinners'

function  Loader() {
  return (
   <div className='h-screen'>
     <div className='flex flex-col justify-center items-center bg-primary h-screen fixed inset-0 gap-3 z-[10000]'> 
        <img src='spinner.png' className='w-[400px] h-[85px] sm:w-[250px] sm:h-[53px]'></img>
        <BarLoader color="#5aa798" />
    </div>
   </div>
  )
}

export default Loader