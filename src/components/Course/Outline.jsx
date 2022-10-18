import React, { useEffect, useState } from 'react'
import { Button } from 'react-daisyui'
import { BiArrowBack } from 'react-icons/bi'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import lists from './courses.json'
import { motion } from 'framer-motion'
const Outline = () => {

  const {courseId} = useParams()
  const [course,setCourse] = useState({})

  useEffect(() => {
    let data = lists.filter(list => list.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') == courseId)
    setCourse(data[0])
  },[courseId])

  return (
    <div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4}}
        >
        {
            course !== {} ?
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-5 container mt-3">
                    <div>
                        <img src={course.image} className='w-full object-cover origin-center' alt="" /><br />
                        <h2 className='text-3xl text-bold'>
                            {course.title}
                        </h2>
                        <p className="text-justify text-bold">
                            {course.description}
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>{course.watch}
                            </span>
                            <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                </svg>{course.comment}
                            </span>
                        </div>
                        <NavLink to="/courses" className='hidden md:block mt-3'>
                            <Button className='btn-primary' startIcon={<BiArrowBack className='text-3xl' />}>All Courses</Button>
                        </NavLink>
                    </div>
                    <div>
                        <h3 className='text-3xl text-bold'>
                            Outline
                        </h3>
                        <p className="mt-3 text-justify">
                            {course.outline}
                        </p>
                        <NavLink to="/courses" className='md:hidden my-5  flex items-center justify-center'>
                            <Button className='btn-primary' startIcon={<BiArrowBack className='text-3xl' />}>All Courses</Button>
                        </NavLink>
                    </div>
                </div>
            </>
            :
            <></>
        }
        </motion.div>
    </div>
  )
}

export default Outline
