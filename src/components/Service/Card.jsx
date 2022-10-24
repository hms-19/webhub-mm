import React from 'react'
import { NavLink } from 'react-router-dom'
import { Flip} from 'react-reveal'
import { getAllServices } from '../../redux/features/services/serviceSlice'
import { useSelector } from 'react-redux'
import { CircleLoader } from 'react-spinners'
const Card = () => {

    const services = useSelector(getAllServices)

  return (
    <>
        {
            services.length > 0 ?
            services.map(service => (
                <div key={service.id}>
                    <Flip left>
                    <NavLink to={`/services/${service.id}`}>
                    <div className="flex flex-col justify-between overflow-hidden text-left transition duration-500 ghost rounded  group">
                        <div className="p-5">
                            <div className="flex items-center justify-center w-10 h-10 mb-4">
                                <img src={service.logo} alt="" />
                            </div>
                            <p className="mb-2 font-bold">{service.name}</p>
                            <p className="text-sm leading-5 text-gray-300">
                                {service.description.slice(0, 130)}<span className="text-primary ml-2">Learn More...</span>
                            </p>
                        </div>
                        <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                    </div>
                    </NavLink>
                    </Flip>
                </div>
            ))
            : 
            <div className='spinner'>
                <CircleLoader color="#7209B7" />
            </div>
        }
    </>
  )
}

export default Card