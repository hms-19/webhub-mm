import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const Slider = () => {
  return (
    <div className='flex w-full justify-between fixed top-1/2 px-3'>
        <div className='rounded-full w-12 h-12 border-2xl border-primary bg-purple-700 border-8 flex justify-center items-center text-3xl '>
            <BiArrowBack />
        </div>
        <div className='rounded-full w-12 h-12 border-2xl border-primary bg-purple-700 border-8 flex justify-center items-center text-3xl '>
            <BiArrowBack className='rotate-180' />
        </div>
    </div>
  )
}

export default Slider