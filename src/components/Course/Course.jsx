import React, { useState } from 'react'
import { motion } from 'framer-motion'
import js from '../../assets/images/js.jpg'
import laravel9 from '../../assets/images/laravel9.png'
import reactjs from '../../assets/images/reactjs.png'
import { BiLockAlt } from 'react-icons/bi'

const Course = () => {

  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition duration-300={{ duration: 0.4 }}
        >
      <div className="container flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
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
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full rounded">
            <div className="px-4  flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="">
                    <section className="text-gray-400">
                      <div className="container px-5 py-6 mx-auto">
                        <div className="flex flex-wrap -m-4">
                          <div className="p-4 md:w-1/3">
                            <div className="h-full shadow-lg hover:shadow-xl transition duration-300 rounded-lg overflow-hidden">
                              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={js} alt="blog" />
                              <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-white mb-3">JavaScript</h1>
                                <p className="leading-relaxed mb-3">
                                  You can learn about Programming Concept with Javascript
                                  and theory. And then we teach you to understand theory with a lot of projects and code challenges to know more about programming concepts.
                                </p>
                                <div className="flex items-center flex-wrap ">
                                  <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Course Outlines
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M5 12h14"></path>
                                      <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                  </a>
                                  <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>300
                                  </span>
                                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>50
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 md:w-1/3">
                            <div className="h-full shadow-lg hover:shadow-xl transition duration-300 rounded-lg overflow-hidden">
                              <img className="lg:h-48 md:h-36 w-full object-cover object-left" src={laravel9} alt="blog" />
                              <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-white mb-3">Laravel 9</h1>
                                <p className="leading-relaxed mb-3">
                                  Laravel 9 courses will teach you to understand not only theory but also real world concept .
                                  In this course, You can learn basic theory and real world useful PHP's packages in laravel.
                                  Finally You can practice with News Projects.
                                </p>
                                <div className="flex items-center flex-wrap">
                                  <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Course Outlines
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M5 12h14"></path>
                                      <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                  </a>
                                  <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>120
                                  </span>
                                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>10
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 md:w-1/3">
                            <div className="h-full shadow-lg hover:shadow-xl transition duration-300 rounded-lg overflow-hidden">
                              <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={reactjs} alt="blog" />
                              <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-white mb-3">Reactjs</h1>
                                <p className="leading-relaxed my-3">
                                  Coming Soon...
                                </p>
                                <div className="text-center">
                                    <BiLockAlt cl />
                                </div>  
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="">
                  <section className="text-gray-400">
                      <h3 className='text-4xl text-center mt-12'>
                        Currently there is no course about mobile development
                      </h3>
                      <p className="text-center mt-6 text-2xl">
                        We will inform when we are avilable.
                      </p>
                  </section>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <div className="">
                  <section className="text-gray-400">
                  <h3 className='text-4xl text-center mt-12'>
                        Currently there is no courses about UI/UX.
                      </h3>
                      <p className="text-center mt-6 text-2xl">
                        We will inform when we are avilable.
                      </p>
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