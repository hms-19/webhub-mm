import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {BiArrowBack} from "react-icons/bi";
import './Testimonial.css'
import { motion } from 'framer-motion'

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
                    <Slide index={0} tabIndex="null">
                      <div className="container px-6 mx-auto">
                        <section className="text-gray-800 text-center lg:text-left">
                          <div className="md:px-6 md:px-12 my-8">
                            <div className="container mx-auto xl:px-32">
                              <div className="grid lg:grid-cols-2 flex items-center">
                                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                                  <div className="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14" style={{
                                      'background': 'hsla(0, 0%, 100%, 0.55)',
                                      'backdropFilter': 'blur(30px)',
                                      'zIndex': 1
                                  }}>
                                    <h2 className="text-3xl font-bold mb-2 text-primary">Anna Doe</h2>
                                    <p className="font-semibold mb-4">Graphic designer</p>
                                    <p className="text-gray-600 mb-6">
                                      Ad, at blanditiis quaerat laborum officia incidunt cupiditate dignissimos
                                      voluptates eius aliquid minus praesentium! Perferendis et totam ipsum ex aut earum
                                      libero accusamus voluptas quod numquam saepe, consequuntur nihil quia tenetur
                                      consequatur.
                                    </p>
                                    <ul className="flex justify-center md:justify-start">
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="">
                                  <img src="https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                                    className="w-full object-cover object-center rounded-lg shadow-lg rotate-lg-6" style={{
                                      'height' : '450px',
                                      
                                    }} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>      
                        </section>

                      </div>
                    </Slide>
                    <Slide index={1} tabIndex="null">
                      <div className="container px-6 mx-auto">
                        <section className="text-gray-800 text-center lg:text-left">
                          <div className="md:px-6 md:px-12 my-8">
                            <div className="container mx-auto xl:px-32">
                              <div className="grid lg:grid-cols-2 flex items-center">
                                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                                  <div className="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14" style={{
                                      'background': 'hsla(0, 0%, 100%, 0.55)',
                                      'backdropFilter': 'blur(30px)',
                                      'zIndex': 1
                                  }}>
                                    <h2 className="text-3xl font-bold mb-2 text-primary">Anna Doe</h2>
                                    <p className="font-semibold mb-4">Graphic designer</p>
                                    <p className="text-gray-600 mb-6">
                                      Ad, at blanditiis quaerat laborum officia incidunt cupiditate dignissimos
                                      voluptates eius aliquid minus praesentium! Perferendis et totam ipsum ex aut earum
                                      libero accusamus voluptas quod numquam saepe, consequuntur nihil quia tenetur
                                      consequatur.
                                    </p>
                                    <ul className="flex justify-center md:justify-start">
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="">
                                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                    className="w-full object-cover object-center rounded-lg shadow-lg rotate-lg-6" style={{
                                      'height' : '450px',
                                      
                                    }} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>      
                        </section>

                      </div>
                    </Slide>
                    <Slide index={2} tabIndex="null">
                      <div className="container px-6 mx-auto">
                        <section className="text-gray-800 text-center lg:text-left">
                          <div className="md:px-6 md:px-12 my-8">
                            <div className="container mx-auto xl:px-32">
                              <div className="grid lg:grid-cols-2 flex items-center">
                                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                                  <div className="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14" style={{
                                      'background': 'hsla(0, 0%, 100%, 0.55)',
                                      'backdropFilter': 'blur(30px)',
                                      'zIndex': 1
                                  }}>
                                    <h2 className="text-3xl font-bold mb-2 text-primary">Anna Doe</h2>
                                    <p className="font-semibold mb-4">Graphic designer</p>
                                    <p className="text-gray-600 mb-6">
                                      Ad, at blanditiis quaerat laborum officia incidunt cupiditate dignissimos
                                      voluptates eius aliquid minus praesentium! Perferendis et totam ipsum ex aut earum
                                      libero accusamus voluptas quod numquam saepe, consequuntur nihil quia tenetur
                                      consequatur.
                                    </p>
                                    <ul className="flex justify-center md:justify-start">
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="">
                                  <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                                    className="w-full object-cover object-center rounded-lg shadow-lg rotate-lg-6" style={{
                                      'height' : '450px',
                                      
                                    }} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>      
                        </section>

                      </div>
                    </Slide>
                    <Slide index={3} tabIndex="null">
                      <div className="container px-6 mx-auto">
                        <section className="text-gray-800 text-center lg:text-left">
                          <div className="md:px-6 md:px-12 my-8">
                            <div className="container mx-auto xl:px-32">
                              <div className="grid lg:grid-cols-2 flex items-center">
                                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                                  <div className="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14" style={{
                                      'background': 'hsla(0, 0%, 100%, 0.55)',
                                      'backdropFilter': 'blur(30px)',
                                      'zIndex': 1
                                  }}>
                                    <h2 className="text-3xl font-bold mb-2 text-primary">Anna Doe</h2>
                                    <p className="font-semibold mb-4">Graphic designer</p>
                                    <p className="text-gray-600 mb-6">
                                      Ad, at blanditiis quaerat laborum officia incidunt cupiditate dignissimos
                                      voluptates eius aliquid minus praesentium! Perferendis et totam ipsum ex aut earum
                                      libero accusamus voluptas quod numquam saepe, consequuntur nihil quia tenetur
                                      consequatur.
                                    </p>
                                    <ul className="flex justify-center md:justify-start">
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                      <li>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="w-4 text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                          <path fill="currentColor"
                                            d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                          </path>
                                        </svg>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="">
                                  <img src="https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=396&q=80"
                                    className="w-full object-cover object-center rounded-lg shadow-lg rotate-lg-6" style={{
                                      'height' : '450px',
                                      
                                    }} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>      
                        </section>

                      </div>
                    </Slide>
                    
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