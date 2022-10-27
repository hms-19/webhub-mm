import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-daisyui'
import { BiArrowBack, BiCartAlt } from 'react-icons/bi'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import {Bounce } from 'react-reveal'
import parse from 'html-react-parser'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleCourse, singleCourse } from '../../redux/features/courses/courseSlice'
import { api } from '../../api'
import CircleLoader from 'react-spinners/CircleLoader'
import wave from '../../assets/images/wave.png'
import kpay from '../../assets/images/kpay.png'
import aya from '../../assets/images/aya.png'
import uab from '../../assets/images/uab.jpg'
import './Outline.css'
import noimage from '../../assets/images/noimage.png'

const Outline = () => {

  const {courseId} = useParams()

  const dispatch = useDispatch()

  //single Course

  const getCourse = async  () => {
    let res = await api.get(`/courses/${courseId}`)
                .catch(err => err)

    dispatch(singleCourse(res.data.data))
  }


  useEffect(() => {
    getCourse()
  },[])

  const course = useSelector(getSingleCourse)

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
    };

  return (
    <div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4}}
        >
        {
            JSON.stringify(course) !== '{}'  ?
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-5 container mt-3 mb-6">
                    <div>
                        <Bounce>
                            <img src={course.image}  onError={e => { e.currentTarget.src = noimage; }} className='w-full object-cover origin-center' alt="" />
                        </Bounce>
                        <br />
                        <Bounce>
                            <h2 className='text-3xl text-bold'>
                                {course.title}
                            </h2>
                            <p className="text-justify text-bold my-2">
                                {course.description}
                            </p>
                            
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-justify text-bold my-2">
                                    <strong>Price -</strong> {course.price} MMK
                                </p>
                                <p className="text-justify text-bold my-2">
                                    <strong>Duration -</strong> {course.duration} Months
                                </p>
                            </div>
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
                        </div> 
                        <div className='md:hidden block mt-3'>
                            <Button className='btn-primary' onClick={toggleVisible} startIcon={<BiCartAlt className='text-3xl' />}>Learn</Button>
                        </div>                       
                        </Bounce>
                        <Bounce>
                            <div className="flex justify-between items-center mt-4">
                            <NavLink to="/courses" className='hidden md:block mt-3'>
                                <Button className='' startIcon={<BiArrowBack className='text-3xl' />}>All Courses</Button>
                            </NavLink>
                            
                            <div className='hidden md:block mt-3'>
                                <Button className='btn-primary' onClick={toggleVisible} startIcon={<BiCartAlt className='text-3xl' />}>Learn</Button>
                            </div>    
                            </div>    
                        </Bounce>                     
                        
                    </div>
                    <Bounce>
                        <div>
                            <h3 className='text-3xl text-bold'>
                                Outline
                            </h3>
                            <p className="mt-3 md:ml-3 text-justify">
                                {parse(`${course.outline}`)}
                            </p>
                            <NavLink to="/courses" className='md:hidden my-5  flex items-center justify-center'>
                                <Button className='' startIcon={<BiArrowBack className='text-3xl' />}>All Courses</Button>
                            </NavLink>
                        </div>
                    </Bounce>
                </div>
                
                
            </>
            :
            <div className='spinner'>
                <CircleLoader color="#7209B7" />
            </div>
        }
        </motion.div>

        <Modal open={visible} onClickBackdrop={toggleVisible}>
            <Button
            size="sm"
            shape="circle"
            className="absolute right-2 top-2"
            onClick={toggleVisible}
            >
            ✕
            </Button>
          <Modal.Header className="font-bold">
            Thanks for interesting
          </Modal.Header>
    
          <Modal.Body>
                <p>
                    After transferring money to any of the following payment accounts, you can send a screenshot to <a className='text-primary cursor-pointer' onClick={() => openInNewTab('https://www.facebook.com/webhub776')}>Page Messenger</a> and deposit it.
                </p>
                <ul className='mt-4'>
                    <li className='flex items-center justify-start gap-x-4 my-2'>
                        <img src={wave} className='rounded' style={{
                            'width' : '40px',
                            'height' : '40px'
                        }} />
                        <p>
                            09671012654 (Htet Myat Soe)
                        </p>
                    </li>
                    <li className='flex items-center justify-start gap-x-4 my-2'>
                        <img src={kpay} className='rounded' style={{
                            'width' : '40px',
                            'height' : '40px'
                        }} />
                        <p>
                            09760511244 (Yi Yi Aye)
                        </p>
                    </li>
                    <li className='flex items-center justify-start gap-x-4 my-2'>
                        <img src={aya} className='rounded' style={{
                            'width' : '40px',
                            'height' : '40px'
                        }} />
                        <p>
                            09793148428 (Htet Myat Soe)
                        </p>
                    </li>
                    <li className='flex items-center justify-start gap-x-4 my-2'>
                        <img src={uab} className='rounded' style={{
                            'width' : '40px',
                            'height' : '40px'
                        }} />
                        <p>
                            09793148428 (U Soe Min)
                        </p>
                    </li>
                </ul>
          </Modal.Body>
        </Modal>
    </div>
  )
}

export default Outline
