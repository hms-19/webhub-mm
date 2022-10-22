import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
const Blog = () => {
  return (
    <>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4}}
        >

      <section className="py-6 sm:py-12  dark:text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <Card />
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center lg:px-0 sm:px-6 px-4 mb-4">
      
              <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                  <div className="flex items-center pt-3 text-gray-500 hover:text-gray-100 cursor-pointer">
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <p className="text-sm ml-3 font-medium leading-none ">Previous</p>                    
                  </div>
                  <div className="sm:flex hidden">
                      <p className="text-sm font-medium leading-none cursor-pointer text-gray-500 hover:text-gray-100 border-t border-transparent hover:text-gray-100 pt-3 mr-4 px-2">1</p>
                      <p className="text-sm font-medium leading-none cursor-pointer text-gray-500 hover:text-gray-100 border-t border-transparent hover:text-gray-100 pt-3 mr-4 px-2">2</p>
                      <p className="text-sm font-medium leading-none cursor-pointer text-gray-500 hover:text-gray-100 border-t border-transparent hover:text-gray-100 pt-3 mr-4 px-2">3</p>
                      <p className="text-sm font-medium leading-none cursor-pointer text-gray-100 border-t text-gray-100 pt-3 mr-4 px-2">4</p>
                      <p className="text-sm font-medium leading-none cursor-pointer text-gray-500 hover:text-gray-100 border-t border-transparent hover:text-gray-100 pt-3 mr-4 px-2">5</p>
                      <p className="text-sm font-medium leading-none cursor-pointer text-gray-500 hover:text-gray-100 border-t border-transparent hover:text-gray-100 pt-3 mr-4 px-2">6</p>
                      <p className="text-sm font-medium leading-none cursor-pointer text-gray-500 hover:text-gray-100 border-t border-transparent hover:text-gray-100 pt-3 mr-4 px-2">7</p>
                      <p className="text-sm font-medium leading-none cursor-pointer text-gray-500 hover:text-gray-100 border-t border-transparent hover:text-gray-100 pt-3 mr-4 px-2">8</p>
                  </div>
                  <div className="flex items-center pt-3 text-gray-500 hover:text-gray-100 cursor-pointer">
                      <p className="text-sm font-medium leading-none mr-3">Next</p>
                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          
                  </div>
              </div>
      </div>
    </motion.div>
    
    </>
  )
}

export default Blog