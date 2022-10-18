import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { NavLink, useLocation } from 'react-router-dom'

const Slider = () => {

  const [leftPage, setLeftPage] = useState('contactus')
  const [rightPage, setRightPage] = useState('services')

  const [paths,setPaths] = useState(['','services','courses','blogs','testimonial','aboutus','contactus'])
  
  // set slider route
    const location = useLocation()

    useEffect(() => {
      let pathname = location.pathname.split('/')[1]
      console.log(pathname)
      let index  = paths.indexOf(pathname)
      
      if(index == paths.length - 1){
        setLeftPage('aboutus')
        setRightPage('')
      }
      else if(index == 0){
        setLeftPage('contactus')
        setRightPage('services')
      }
      else{
        setLeftPage(paths[index - 1])
        setRightPage(paths[index + 1])
      }
    },[location])
  return (
    <div className='flex w-full justify-between px-3'>
        <NavLink to={leftPage}>
          <div className='rounded-full w-12 h-12 fixed top-1/2 left-1 md:left-3 z-50 border-2xl bg-primary flex justify-center items-center text-3xl '>
              <BiArrowBack />
          </div>
        </NavLink>
        <NavLink to={rightPage}>
          <div className='rounded-full w-12 h-12 fixed top-1/2 right-1 md:right-3 z-50 border-2xl bg-primary flex justify-center items-center text-3xl '>
              <BiArrowBack className='rotate-180' />
          </div>
        </NavLink>
    </div>
  )
}

export default Slider