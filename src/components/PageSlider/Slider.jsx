import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
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
          }} className='rounded-full w-10 h-10 fixed top-1/2 left-1 md:left-3 z-50 border-2xl bg-primary flex justify-center items-center text-2xl hover:opacity-50 transition duration-300'>
              <BiArrowBack />
          </motion.div>
        </NavLink>
        <NavLink to={rightPage}>
          <motion.div animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 0, 100, 100, 0],
            borderRadius: ["50%", "20%", "30%", "40%", "50%"],
            transition : {type: "spring", stiffness: 100} ,
          }}   className='rounded-full w-10 h-10 fixed top-1/2 right-1 md:right-3 z-50 border-2xl bg-primary flex justify-center items-center text-2xl hover:opacity-50 transition duration-300'>
              <BiArrowBack className='rotate-180' />
          </motion.div>
        </NavLink>
    </div>
  )
}

export default Slider