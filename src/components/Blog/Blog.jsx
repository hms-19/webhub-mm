import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setBlogs } from '../../redux/features/blogs/blogSlice'
import { api } from '../../api'
const Blog = () => {

  const dispatch = useDispatch()
  

  //fetchBlogs

  const fetchBlogs = async  () => {
    let res = await api.get('/blogs')
                .catch(err => err)


    dispatch(setBlogs(res.data.data));

  }

  useEffect(() => {
    fetchBlogs()
  },[])


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
          <Card />
          
        </div>
      </section>
    </motion.div>
    
    </>
  )
}

export default Blog