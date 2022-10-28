import React, { useEffect } from 'react'
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {BiArrowBack} from "react-icons/bi";
import './Testimonial.css'
import { motion } from 'framer-motion'
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTestimonials, setTestimonials } from '../../redux/features/testimonials/testimonialSlice';
import { api } from '../../api';
import { CircleLoader } from 'react-spinners'

const Testimonial = () => {

    const dispatch = useDispatch()
  

  //fetchTestimonial

  const fetchTestimonial = async  () => {
    let res = await api.get('/testimonials')
                .catch(err => err)

    dispatch(setTestimonials(res.data.data))
  }


  useEffect(() => {
    fetchTestimonial()
  },[])

  const testimonials = useSelector(getAllTestimonials)


  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    >
      {
        testimonials.length > 0 ?
        <div className=''>
          <div className="flex items-center justify-between w-full absolute z-0">
              <div className="w-1/5" />
              <div className="w-4/6 mt-0" />
          </div>
          
          <div className="xl:px-20 mx-auto container relative z-10">
              <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={testimonials.length} className='flex flex-col'>
                  <Slider>
                    <Card />                    
                  </Slider>
                  <div className="flex items-center my-3 mx-auto">
                      <ButtonBack className="cursor-pointer " role="button" aria-label="previous slide">
                          <BiArrowBack className='text-3xl text-white' />
                      </ButtonBack>

                      <ButtonNext role="button" aria-label="next slide" className="cursor-pointer ml-2">
                        <BiArrowBack className='text-3xl text-white rotate-180' />
                      </ButtonNext>
                  </div>
              </CarouselProvider>
          </div>
        </div>
        :
        <div className='spinner'>
        <CircleLoader color="#7209B7" />
        </div>
      }
    </motion.div>
)
}

export default Testimonial