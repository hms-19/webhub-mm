import React from 'react'
import blogs from './data.json'
import { Flip } from 'react-reveal'
const Card = () => {
  return (
    <>
    
        {
            blogs.map(blog => (
                <Flip key={blog.id} left>
                    <article className="flex flex-col dark:bg-gray-800 transition duration-700 hover:bg-gray-900 rounded-2xl">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                        <img alt="" className="object-cover rounded-t-2xl w-full h-52 dark:bg-gray-500" src={blog.image} />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                        <a rel="noopener noreferrer" href="#" className="text-lg font-semibold hover:text-violet-500 dark:text-violet-400">{blog.title.slice(0,50)}</a>
                        <h3 className="flex-1 py-2 text-xs uppercase leading-snug">{blog.category}</h3>
                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs  dark:text-gray-400">
                            <span>{blog.date}</span>
                        </div>
                        </div>
                </article>
                </Flip>
            ))
        }
    </>
  )
}

export default Card