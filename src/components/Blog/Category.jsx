import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories, setCategories } from '../../redux/features/categories/categorySlice'
import CircleLoader from 'react-spinners/CircleLoader'
import { api } from '../../api'
import { NavLink } from 'react-router-dom'
import { Flip } from 'react-reveal'
import { motion } from 'framer-motion'

const Category = () => {

const dispatch = useDispatch()

const [isLoading, setIsLoading] = useState(false)

//fetchCaategories

const fetchCaategories = async  () => {
    setIsLoading(true)
    let res = await api.get('/categoriesList')
                .catch(err => console.log('Something Was  Wrong'))

    dispatch(setCategories(res.data.data));
    setIsLoading(false)
}


useEffect(() => {
    fetchCaategories()
},[])

    const categories = useSelector(getAllCategories)

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4}}
        >
        {
            isLoading ?
            <div className='spinner'>
                <CircleLoader color="#7209B7" />
            </div>
            :
            categories.length > 0 ? 
                <div className='container mx-auto my-3 lg:my-8'>
                    <h2 className='text-center text-2xl font-bold mt-4 mb-12'>What type of blogs do you read?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {
                            categories.map(category => (
                                <div key={category.id}>
                                    <Flip left>
                                        <div className='shadow shadow-transparent bg-primary hover:shadow-purple-800  transition duration-700 rounded-lg  p-4 '>
                                            <NavLink to={`/blogs/${category.slug}`} className='text-center'>
                                                    <h5 className="text-xl font-semibold mb-2">{category.name}</h5>
                                                    <p>Blogs : <span className=''>{category.blog_count}</span></p>
                                            </NavLink>
                                        </div>
                                    </Flip>
                                </div>
                            ))
                        }
                    </div>
                </div>
            :
            <h3 className="text-center mt-12">There is No Categories</h3>
        }
      </motion.div>

    </>
  )

}

export default Category