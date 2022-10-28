import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import service from '../../assets/images/service.png'
import Card from './Card';
import { Flip} from 'react-reveal'
import { useDispatch } from 'react-redux'
import { setServices } from '../../redux/features/services/serviceSlice';
import { api } from '../../api';

const Service = () => {

  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)

  //fetchServices

  const fetchServices = async  () => {
    setIsLoading(true)
    let res = await api.get('/services')
                .catch(err =>console.log('Something Was  Wrong'))

    dispatch(setServices(res.data.data))

    setIsLoading(false)

  }


  useEffect(() => {
    fetchServices()
  },[])

  return (
    <>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        >

          <div className="">
            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-7 ">
              <div className='relative grid gap-5 sm:grid-cols-1 lg:grid-cols-3 items-center'>
                <div className='col-span-2'>
                  <div className="relative grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
                      <Card isLoading={isLoading} />
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Flip right>
                      <img src={service}  />
                    </Flip>
                </div>
              </div>
             
            </div>
          </div>
    
          
        </motion.div>
    </>
    
  )
}

export default Service