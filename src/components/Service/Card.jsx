import React from 'react'
import { NavLink } from 'react-router-dom'
import { Flip} from 'react-reveal'
const Card = ({services}) => {
  return (
    <>
        {
            services.map(service => (
                <div key={service.id}>
                    <Flip right>
                    <NavLink to={`/services/${service.title.toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')}`}>
                    <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 ghost rounded shadow-md group hover:shadow-2xl">
                        <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                            <svg
                                className="w-8 h-8 text-deep-purple-accent-400"
                                stroke="currentColor"
                                viewBox="0 0 52 52"
                            >
                                <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                                />
                            </svg>
                            </div>
                            <p className="mb-2 font-bold">{service.title}</p>
                            <p className="text-sm leading-5 text-gray-300">
                                {service.description.slice(0, 100)}<span className="text-primary">Learn More...</span>
                            </p>
                        </div>
                        <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    </div>
                    </NavLink>
                    </Flip>
                    
                </div>
            ))
        }
    </>
  )
}

export default Card