import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import Card from './Card'
import { Bounce, Zoom } from 'react-reveal'
import { useDispatch } from 'react-redux'
import { setCourses } from '../../redux/features/courses/courseSlice';
import { api } from '../../api'

const Course = () => {

  const [openTab, setOpenTab] = useState(1);

  const dispatch = useDispatch()
  
  const [isLoading, setIsLoading] = useState(false)

  //fetchCourses

  const fetchCourses = async  () => {
    setIsLoading(true)
    let res = await api.get('/courses')
                .catch(err => err)


    dispatch(setCourses(res.data.data));

    setIsLoading(false)

  }

  useEffect(() => {
    fetchCourses()
  },[])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition duration-300={{ duration: 0.4 }}
        >
      <div className="container flex flex-wrap mx-auto">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <Bounce left>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase transition duration-150 ease-in-out px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1
                      ? "text-white btn-primary"
                      : "text-" + 'primary' + "-600 ")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Web Development
                </a>
              </li>
            </Bounce>
            <Bounce top>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase transition duration-150 ease-in-out px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2
                      ? "text-white btn-primary"
                      : "text-" + 'primary' + "-600 ")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Mobile Development
                </a>
              </li>
            </Bounce>
            <Bounce right>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase transition duration-150 ease-in-out px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3
                      ? "text-white btn-primary"
                      : "text-" + 'primary' + "-600 ")
                  }
                  onClick={e => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  UI/UX DESIGN
                </a>
              </li>
            </Bounce>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full rounded">
            <div className="px-4  flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="">
                    <section className="text-gray-400">
                      <div className="container px-5 py-6 mx-auto">
                        <div className="flex flex-wrap -m-4">
                          <Card isLoading={isLoading} />                          
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="">
                  <section className="text-gray-400">
                      <Zoom>
                        <h3 className='text-2xl md:text-4xl text-center mt-12'>
                          Currently there is no course about mobile development
                        </h3>
                        <p className="text-center mt-6 text-xl md:text-2xl">
                          We will inform when we are avilable.
                        </p>
                      </Zoom>
                  </section>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="">
                  <section className="text-gray-400">
                      <Zoom>
                        <h3 className='text-2xl md:text-4xl text-center mt-12'>
                          Currently there is no courses about UI/UX.
                        </h3>
                        <p className="text-center mt-6 text-xl md:text-2xl">
                          We will inform when we are avilable.
                        </p>
                      </Zoom>
                  </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </>
  )
}

export default Course