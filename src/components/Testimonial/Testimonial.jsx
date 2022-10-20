import React from 'react'
import { CarouselProvider, Slider, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {BiArrowBack} from "react-icons/bi";
import './Testimonial.css'
import { motion } from 'framer-motion'
import Card from './Card';

const Testimonial = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    >
    <div>
        <div className="flex items-center justify-between w-full absolute z-0">
            <div className="w-1/5" />
            <div className="w-4/6 mt-0" />
        </div>
        <div className="xl:px-20 px-8 2xl:mx-auto 2xl:container relative z-40">
            <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} className='flex flex-col'>
                <Slider>
                  <Card />                    
                </Slider>
                <div className="flex items-center mt-0">
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
    </motion.div>
)
}

export default Testimonial