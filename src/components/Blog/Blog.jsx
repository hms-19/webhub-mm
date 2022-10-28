import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import { useDispatch } from 'react-redux'
import { setBlogs } from '../../redux/features/blogs/blogSlice'
import { api } from '../../api'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-daisyui'
import { BiArrowBack } from 'react-icons/bi'
const Blog = () => {

  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)

  const { categorySlug } = useParams()

  //fetchBlogs

  const fetchBlogs = async  () => {
    setIsLoading(true)
    let res = await api.get(`/blogsbycategory?categorySlug=${categorySlug}`)
                .catch(err => console.log('Something Was  Wrong'))


    dispatch(setBlogs(res.data.data));
    setIsLoading(false)
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

      <section className="py-6  dark:text-gray-100">
        <div className="container p-6 mx-auto space-y-6">
          <NavLink to='/blogs'>
            <Button color='primary' startIcon={<BiArrowBack className='text-xl' />}>All Categories</Button>
          </NavLink>
          <Card isLoading={isLoading} />
        </div>
      </section>
    </motion.div>
    
    </>
  )
}

export default Blog