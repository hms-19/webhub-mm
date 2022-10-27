import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-daisyui';
import { BiArrowBack } from 'react-icons/bi';
import { Bounce, Zoom } from 'react-reveal'
import './ServiceItem.css'
import { useDispatch, useSelector } from 'react-redux';
import { getSingleService, singleService } from '../../redux/features/services/serviceSlice';
import { api } from '../../api';
import { CircleLoader } from 'react-spinners'
import noimage from '../../assets/images/noimage.png'


const ServiceItem = () => {

  const dispatch = useDispatch()
  const { serviceId } = useParams()

  //get Service

  const getService = async  () => {

    const res = await api.get(`/services/${serviceId}`).catch(err => console.log(err))

    dispatch(singleService(res.data.data))
  }


  useEffect(() => {
    getService()
  },[])

  const service = useSelector(getSingleService)

  return (
    <>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        >

        {
             JSON.stringify(service) !== '{}' ?
            <div className="container mx-auto">
            
              <section className="mb-24 text-gray-800">
                <div className="container mx-auto xl:px-18 text-center lg:text-left">
                  <div className="grid lg:grid-cols-2 items-center">
                    <Zoom left>
                      <div className="mb-12 lg:mb-0 z-50">
                        <div className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 service-card">
                          <h2 className="text-3xl font-bold mb-6">{service.name}</h2>
                          
              
                          <div className="flex flex-col md:flex-row md:justify-around lg:justify-between mb-6 mx-auto">
                            <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                                <path fill="currentColor"
                                  d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                </path>
                              </svg>
                              Best team
                            </p>
              
                            <p className="flex items-center mb-4 md:mb-2 lg:mb-0 mx-auto md:mx-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                                <path fill="currentColor"
                                  d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                </path>
                              </svg>
                              Best quality
                            </p>
              
                            <p className="flex items-center mb-2 lg:mb-0 mx-auto md:mx-0">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 mr-2">
                                <path fill="currentColor"
                                  d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                                </path>
                              </svg>
                              Best experience
                            </p>
                          </div>
              
                          <p className="text-gray-800 mb-0">
                          {service.description}
                          </p>
                        </div>
                      </div>
                    </Zoom>
                    <Zoom right>
                      <div>
                        <img src={service.image} onError={e => { e.currentTarget.src = noimage; }} className="w-full object-cover transition duration-700 ease-in-out hover:scale-125" />
                      </div>
                    </Zoom>
                  </div>
                </div>
              </section>
            
              <Bounce left>
                <NavLink to="/services" className='mt-3 mb-5 flex items-center justify-center'>
                    <Button className='btn-primary' startIcon={<BiArrowBack className='text-3xl' />}>All Services</Button>
                </NavLink>
              </Bounce>
            </div>
            : 
            <div className='spinner'>
                <CircleLoader color="#7209B7" />
            </div>
        }
        </motion.div>
    </>
  )
}

export default ServiceItem