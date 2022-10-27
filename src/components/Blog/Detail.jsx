import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { api } from '../../api'
import { motion } from "framer-motion";
import { getSingleBlog, singleBlog } from '../../redux/features/blogs/blogSlice'
import { NavLink } from 'react-router-dom';
import { Button } from 'react-daisyui';
import { BiArrowBack } from 'react-icons/bi';
import { Bounce, Zoom } from 'react-reveal';
import CircleLoader from 'react-spinners/CircleLoader';
import parse from 'html-react-parser'
import noimage from '../../assets/images/noimage.png'

const Detail = () => {

    const {blogId} = useParams()

    const dispatch = useDispatch()
    

    //single Blog

    const getBlog = async  () => {
        let res = await api.get(`/blogs/${blogId}`)
                    .catch(err => err)

        dispatch(singleBlog(res.data.data))
    }


    useEffect(() => {
        getBlog()
    },[])

    const blog = useSelector(getSingleBlog) 

    // console.log(blog.title)
    
  return (
    <div>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4}}
        >
        {
             JSON.stringify(blog) !== '{}'  ?
             <>
             <div className='container mx-auto my-4'>
                 <Zoom top>
                     <img src={blog.image} onError={e => { e.currentTarget.src = noimage; }} style={{
                         'maxHeight' : '450px'
                     }} className='lg:w-3/4 w-full lg:px-32 md:px-16 px-2  my-3 mx-auto' />
                 </Zoom>
                 <div className='lg:px-32 md:px-16 px-2 mt-2'>
                     <div className="flex justify-between items-center flex-wrap gap-y-4">
                         <div>
                             <Bounce left>
                                 <h3 className="text-bold text-gray-200 text-bold text-2xl my-3">{blog.title}</h3>
                                 <h3 className="text-bold text-gray-400 text-bold text-1l">{blog.category.name}</h3>
                             </Bounce>
                         </div>
                         <div>
                             <Bounce right>
                                 <p className="text-gray-400 text-sm">Reading Time <span className="ml-2 badge">{blog.duration} mins</span></p>
                             </Bounce>
                         </div>
                     </div>
                     
                     <Zoom>
                         <p className='my-3 text-gray-300'>
                             {parse(`${blog.description}`)}
                         </p>
                     </Zoom>
 
                     <div className="my-3 flex justify-between items-start md:items-center flex-col sm:flex-row">
                         <Bounce left>
                             <div>
                                 <p className="">Author - <span className="text-primary italic ml-2">{blog.author}</span></p>
                                 <p className="">Date - <span className="ml-2">{blog.date}</span></p>
                             </div>
                         </Bounce>
                         <div>
                             <Bounce right>
                                 <NavLink to="/blogs" className='my-5  flex items-center justify-center'>
                                     <Button className='btn-primary' startIcon={<BiArrowBack className='text-3xl' />}>All Blogs</Button>
                                 </NavLink> 
                             </Bounce>
                         </div>
                     </div>
                     
 
                 </div>
             </div>
         </>
           
            :

            <div className='spinner'>
            <CircleLoader color="#7209B7" />
        </div>
          
            
        }
        </motion.div>
    </div>
  )
}

export default Detail