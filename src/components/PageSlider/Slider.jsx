import React, { useEffect, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Slider.css'
const Slider = () => {

  const [leftPage, setLeftPage] = useState('contactus')
  const [rightPage, setRightPage] = useState('services')

  const [paths,setPaths] = useState(['','services','courses','blogs','testimonial','aboutus','contactus'])
  
  // set slider route
    const location = useLocation()

    useEffect(() => {
      let pathname = location.pathname.split('/')[1]
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
          <motion.div animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 0, 100, 100, 0],
            borderRadius: ["50%", "20%", "30%", "40%", "50%"],
            transition : {type: "spring", stiffness: 100} ,
          }} className='rounded-full w-10 h-10 fixed bottom-4 left-6 md:top-1/2 md:left-5 z-50 border-2xl bg-primary flex justify-center items-center text-2xl  transition duration-300'>
              <BiChevronLeft />
          </motion.div>
        </NavLink>
        <NavLink to={rightPage}>
          <motion.div animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 0, 100, 100, 0],
            borderRadius: ["50%", "20%", "30%", "40%", "50%"],
            transition : {type: "spring", stiffness: 100} ,
          }}   className='rounded-full w-10 h-10 fixed bottom-4 setRight md:right-3 md:top-1/2  z-50 border-2xl bg-primary flex justify-center items-center text-2xl  transition duration-300'>
              <BiChevronRight />
          </motion.div>
        </NavLink>
    </div>
  )
}

export default Slider