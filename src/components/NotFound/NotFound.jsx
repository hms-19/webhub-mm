import React from 'react'
import { Button } from 'react-daisyui'
import { BiHome } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
const NotFound = () => {
  return (
    <>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        >
        <main style={{
            'minHeight' : 'calc(100vh - 80px)'
        }} className="w-full flex flex-col justify-center items-center">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-primary text-white px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5">
            <a
                className="relative inline-block text-sm font-medium text-primary group active:text-primary focus:outline-none focus:ring"
            >
                <span
                className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5  group-hover:translate-y-0 group-hover:translate-x-0"
                ></span>

                <span className="relative block px-8 py-3">
                    <NavLink to="/">
                            <Button startIcon={<BiHome className='text-2xl' />}>
                                GO HOME
                            </Button>
                    </NavLink>
                </span>
            </a>
            </button>
        </main>

        </motion.div>
        
    </>
  )
}

export default NotFound