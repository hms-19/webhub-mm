import { Slide } from 'pure-react-carousel'
import React from 'react'
import customers from './data.json'
import { Bounce } from 'react-reveal'
const Card = () => {

    
  return (
    
    <>
        {
            customers.map(customer => (
            
                <Slide key={customer.id} index={customer.id} tabIndex="null">
                    <div className="container px-6 mx-auto">
                    <section className="text-gray-800 text-center lg:text-left">
                        <div className="md:px-6 md:px-12 my-8">
                        <div className="container mx-auto xl:px-32">
                            <div className="grid lg:grid-cols-2 flex items-center">
                            <Bounce left>
                                <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                                    <div className="relative block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14" style={{
                                        'background': 'hsla(0, 0%, 100%, 0.55)',
                                        'backdropFilter': 'blur(30px)',
                                        'zIndex': 1
                                    }}>
                                    <h2 className="text-3xl font-bold mb-2 text-primary">{customer.name}</h2>
                                    <p className="font-semibold mb-4">{customer.job}</p>
                                    <p className="text-gray-600 mb-6">
                                        {customer.comment}
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
                            </Bounce>
                            
                            <Bounce right>
                                <div className="">
                                    <img src={customer.image}
                                    className="w-full object-cover object-center rounded-lg shadow-lg rotate-lg-6" style={{
                                        'height' : '450px',
                                        
                                    }} alt="" />
                                </div>
                            </Bounce>
                            </div>
                        </div>
                        </div>      
                    </section>
                    </div>
                </Slide>
            
        ))
    }
    </>

  )
}

export default Card