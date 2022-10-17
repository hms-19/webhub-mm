import React from 'react'
import { motion } from "framer-motion";
import service from '../../assets/images/service.jpg'
import services from './services.json'
import Card from './Card';

const Service = () => {


  return (
    <>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        >

          <div className="">
            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className='relative grid gap-5 sm:grid-cols-1 lg:grid-cols-2'>
                <div className="flex flex-col justify-between overflow-hidden">
                      <div className='flex items-center justify-center'>
                              <div
                                style={{
                                  'minHeight' : '400px'
                                }}
                                  className="overflow-hidden aspect-video cursor-pointer rounded-xl relative group">
                                  <div
                                      className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                                      <div>
                                          <div
                                              className="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                                              <div className="text-5xl text-primary font-bold">OUR SERVICES</div>

                                              <div className="opacity-60 text-sm ">
                                                  Lorem ipsum dolor sit amet, consectetur adipisicing
                                                  elit. Distinctio dolores error iure, perferendis
                                                  sequi totam. Ad aliquam aperiam atque deleniti dolor
                                                  dolorem enim esse et in, inventore itaque, pariatur
                                                  reprehenderit.
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <img
                                      alt=""
                                      className="object-cover object-center w-full h-100 aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
                                      src={service} />
                              </div>
                    </div>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                </div>
                <div className="relative grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
                    <Card services={services} />
                </div>
              </div>
             
            </div>
          </div>
    
          
        </motion.div>
    </>
    
  )
}

export default Service