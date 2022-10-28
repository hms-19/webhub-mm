import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Flip } from 'react-reveal'
import { NavLink } from 'react-router-dom'
import { getAllBlogs } from '../../redux/features/blogs/blogSlice'
import CircleLoader from 'react-spinners/CircleLoader'
import Pagination from '../Pagination/Pagination'
import noimage from '../../assets/images/noimage.png'
const Card = ({isLoading}) => {

    const blogs = useSelector(getAllBlogs)



    const [currentPage, setCurrentPage] = useState(1)
    const [blogPerPage, setBlogPerPage] = useState(4)

    const lastBlogIndex = currentPage * blogPerPage
    const firstBlogIndex = lastBlogIndex - blogPerPage

    const currentBlogs =  blogs.length > 0 ? blogs.slice(firstBlogIndex,lastBlogIndex) : []

  return (
    <>
    
        {
            isLoading ?
            <div className='spinner'>
                <CircleLoader color="#7209B7" />
            </div>
            :

            currentBlogs.length > 0 ?
                <>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            
                     {
                     currentBlogs.map(blog => (
                        <div key={blog.id}>
                            <Flip left>
                                <article className="flex flex-col shadow shadow-transparent hover:shadow-purple-800 transition duration-700  rounded-2xl">
                                    <NavLink to={`/blogs/${blog.category.slug}/${blog.id}`}>
                                    <img alt="" className="object-cover rounded-t-2xl w-full h-52 dark:bg-gray-500" src={blog.image} onError={e => { e.currentTarget.src = noimage; }} />
                                    </NavLink>
                                    <div className="flex flex-col flex-1 p-6">
                                    <NavLink to={`/blogs/${blog.category.slug}/${blog.id}`} className="text-lg font-semibold hover:text-violet-500 dark:text-violet-400">{blog.title.slice(0,50)}</NavLink>
                                    <h3 className="flex-1 py-2 text-xs">{blog.category.name}</h3>
                                    <div className="flex flex-wrap justify-between  space-x-2 text-xs  dark:text-gray-400">
                                        <span>{blog.date}</span>
                                    </div>
                                    </div>
                            </article>
                            </Flip>
                        </div>
                    ))
                    }
                </div>

                    {
                        currentBlogs.length > 4 ?
                        <div>
                            <Pagination totalBlogs={blogs.length} blogPerPage={blogPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                        </div>
                        :
                        <p className="text-light font-thin italic my-4">This category has {currentBlogs.length} blogs</p>
                    }
                    
                </>
            : <h3 className="text-center mt-12">No Blogs Available</h3>
        }
    </>
  )
}

export default Card