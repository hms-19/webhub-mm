import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import service from '../../assets/images/service.png'
import services from './services.json'
import Card from './Card';
import { Flip} from 'react-reveal'
import { useDispatch, useSelector } from 'react-redux'
import { fetchServices } from '../../redux/features/services/serviceSlice';
import { api } from '../../api';

const Service = () => {

  const dispatch = useDispatch()
  const { services } = useSelector(state => state.services.data)

  //fetchServices

  const fetchServices = () => {
    let data = api.get('/services')
                .catch(err => console.log(err.message))
    console.log(data)
  }


  useEffect(() => {
    fetchServices()
    // dispatch(fetchServices(data))
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
            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className='relative grid gap-5 sm:grid-cols-1 lg:grid-cols-2'>
                <div className="relative grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
                    {/* <Card services={services} /> */}
                </div>
                <div className="flex flex-col justify-between overflow-hidden">
                    <Flip right>
                      <div className='flex items-center justify-center'>
                                <img src={service} alt="" />
                      </div>
                    </Flip>
                    <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                </div>
              </div>
             
            </div>
          </div>
    
          
        </motion.div>
    </>
    
  )
}

export default Service