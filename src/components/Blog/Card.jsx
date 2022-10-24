import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Flip } from 'react-reveal'
import { NavLink } from 'react-router-dom'
import { getAllBlogs } from '../../redux/features/blogs/blogSlice'
import CircleLoader from 'react-spinners/CircleLoader'
import Pagination from '../Pagination/Pagination'

const Card = () => {

    const blogs = useSelector(getAllBlogs)
    const [currentPage, setCurrentPage] = useState(1)
    const [blogPerPage, setBlogPerPage] = useState(4)

    const lastBlogIndex = currentPage * blogPerPage
    const firstBlogIndex = lastBlogIndex - blogPerPage

    const currentBlogs =  blogs.length > 0 ? blogs.slice(firstBlogIndex,lastBlogIndex) : []

  return (
    <>
    
        {
            currentBlogs.length > 0 ?
                <>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            
                     {
                     currentBlogs.map(blog => (
                        <div key={blog.id}>
                            <Flip left>
                                <article className="flex flex-col transition duration-700 rounded-2xl">
                                    <NavLink to={`/blogs/${blog.id}`}>
                                    <img alt="" className="object-cover rounded-t-2xl w-full h-52 dark:bg-gray-500" src={blog.image} />
                                    </NavLink>
                                    <div className="flex flex-col flex-1 p-6">
                                    <NavLink to={`/blogs/${blog.id}`} className="text-lg font-semibold hover:text-violet-500 dark:text-violet-400">{blog.title.slice(0,50)}</NavLink>
                                    <h3 className="flex-1 py-2 text-xs uppercase leading-snug">{blog.category}</h3>
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

                    <div>
                        <Pagination totalBlogs={blogs.length} blogPerPage={blogPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </div>
                </>
            : <div className='spinner'>
                <CircleLoader color="#7209B7" />
            </div>
        }
    </>
  )
}

export default Card