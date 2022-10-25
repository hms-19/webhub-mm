import React from 'react'
import { BiLockAlt } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { Zoom } from 'react-reveal'
import { getAllCourses } from '../../redux/features/courses/courseSlice'
import { useSelector } from 'react-redux'
import CircleLoader from 'react-spinners/CircleLoader'
import noimage from '../../assets/images/noimage.png'

const Card = ({isLoading}) => {
    const courses = useSelector(getAllCourses)
  return (
    <>
    
        {
            isLoading ? 
                <div className='spinner'>
                    <CircleLoader color="#7209B7" />
                </div> :
             courses.length > 0 ?
             courses.map(course => (
                <Zoom key={course.id}>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full shadow-lg hover:shadow-xl transition duration-300 rounded-lg overflow-hidden">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={course.image ?? noimage} alt="blog" />
                            <div className="p-6">
                            <h1 className="title-font text-lg font-medium text-white mb-3">{course.title}</h1>
                            <p className="mb-3">
                                {
                                    course.description !== null ? <>
                                        {course.description.slice(0,150)}.....
                                    </>
                                     :
                                    <>
                                        <p className="text-center mt-3">
                                            Coming Soon...
                                        </p>
                                        <h3 className="">
                                            <BiLockAlt className='text-8xl mx-auto block mt-5' />
                                        </h3>
                                    </>

                                }
                            </p>
                            {
                                course.description !== null ?
                                <div className="flex items-center justify-between flex-wrap gap-y-3">
                                    <NavLink to={`/courses/${course.id}`} className="text-primary inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </NavLink>
                                    <div>
                                        <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>{course.student}
                                        </span>
                                        <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>{course.comment_count}
                                        </span>
                                    </div>
                                </div> : <></>
                            }
                            </div>
                        </div>
                    </div>
                </Zoom>
            ))
            : 
            <h2 className="text-center mt-12">No Courses Available</h2>
        }
    </>
  )
}

export default Card