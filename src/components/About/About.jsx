import React from 'react'
import { motion } from 'framer-motion'
import { Flip, Bounce, Zoom } from 'react-reveal'
import { NavLink } from 'react-router-dom';
import { Button } from 'react-daisyui';
import { BiArrowBack } from 'react-icons/bi';
const About = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4}}
        >

        <section className="overflow-hidden py-5">
        <div className="container">
            <div className="flex flex-wrap justify-between items-center -mx-4">
                <div className="w-full lg:w-6/12 px-4">
                    <div className="flex items-center -mx-3 sm:-mx-4">
                    <div className="w-full xl:w-1/2 px-3 sm:px-4">
                        <div className="py-3 sm:py-4">
                            <Bounce left>
                                <img
                                src="https://cdn.tailgrids.com/1.0/assets/images/services/image-1.jpg"
                                alt=""
                                className="rounded-2xl w-full"
                                />
                            </Bounce>
                        </div>
                        <div className="py-3 sm:py-4">
                            <Bounce bottom>
                                <img
                                src="https://cdn.tailgrids.com/1.0/assets/images/services/image-2.jpg"
                                alt=""
                                className="rounded-2xl mx-auto block w-2/3 h-2/3"
                                
                                />
                            </Bounce>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2 px-3 sm:px-4">
                        <div className="my-4 relative z-10">
                            <Flip bottom>
                                <img
                                    src="https://cdn.tailgrids.com/1.0/assets/images/services/image-3.jpg"
                                    alt=""
                                    className="rounded-2xl w-full"
                                    />
                            </Flip>
                            <span className="absolute -right-7 -bottom-7 z-[-1]">
                                <svg
                                width="134"
                                height="106"
                                viewBox="0 0 134 106"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <circle
                                    cx="1.66667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 104)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="16.3333"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 104)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="31"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 31 104)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="45.6667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 104)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="60.3334"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 60.3334 104)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="88.6667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 104)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="117.667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 104)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="74.6667"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 104)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="103"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 103 104)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="132"
                                    cy="104"
                                    r="1.66667"
                                    transform="rotate(-90 132 104)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="1.66667"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 89.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="16.3333"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 89.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="31"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 31 89.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="45.6667"
                                    cy="89.3333"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 89.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="60.3333"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 89.3338)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="88.6667"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 89.3338)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="117.667"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 89.3338)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="74.6667"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 89.3338)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="103"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 103 89.3338)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="132"
                                    cy="89.3338"
                                    r="1.66667"
                                    transform="rotate(-90 132 89.3338)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="1.66667"
                                    cy="74.6673"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 74.6673)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="1.66667"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 31.0003)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="16.3333"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 74.6668)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="16.3333"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 31.0003)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="31"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 31 74.6668)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="31"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 31 31.0003)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="45.6667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 74.6668)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="45.6667"
                                    cy="31.0003"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 31.0003)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="60.3333"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 74.6668)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="60.3333"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 30.9998)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="88.6667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 74.6668)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="88.6667"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 30.9998)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="117.667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 74.6668)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="117.667"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 30.9998)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="74.6667"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 74.6668)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="74.6667"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 30.9998)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="103"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 103 74.6668)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="103"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 103 30.9998)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="132"
                                    cy="74.6668"
                                    r="1.66667"
                                    transform="rotate(-90 132 74.6668)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="132"
                                    cy="30.9998"
                                    r="1.66667"
                                    transform="rotate(-90 132 30.9998)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="1.66667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 60.0003)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="1.66667"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 16.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="16.3333"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 60.0003)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="16.3333"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 16.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="31"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 31 60.0003)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="31"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 31 16.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="45.6667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 60.0003)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="45.6667"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 16.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="60.3333"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 60.0003)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="60.3333"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 16.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="88.6667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 60.0003)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="88.6667"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 16.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="117.667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 60.0003)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="117.667"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 16.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="74.6667"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 60.0003)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="74.6667"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 16.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="103"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 103 60.0003)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="103"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 103 16.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="132"
                                    cy="60.0003"
                                    r="1.66667"
                                    transform="rotate(-90 132 60.0003)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="132"
                                    cy="16.3333"
                                    r="1.66667"
                                    transform="rotate(-90 132 16.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="1.66667"
                                    cy="45.3333"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 45.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="1.66667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 1.66667 1.66683)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="16.3333"
                                    cy="45.3333"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 45.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="16.3333"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 16.3333 1.66683)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="31"
                                    cy="45.3333"
                                    r="1.66667"
                                    transform="rotate(-90 31 45.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="31"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 31 1.66683)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="45.6667"
                                    cy="45.3333"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 45.3333)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="45.6667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 45.6667 1.66683)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="60.3333"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 45.3338)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="60.3333"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 60.3333 1.66683)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="88.6667"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 45.3338)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="88.6667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 88.6667 1.66683)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="117.667"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 45.3338)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="117.667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 117.667 1.66683)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="74.6667"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 45.3338)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="74.6667"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 74.6667 1.66683)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="103"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 103 45.3338)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="103"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 103 1.66683)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="132"
                                    cy="45.3338"
                                    r="1.66667"
                                    transform="rotate(-90 132 45.3338)"
                                    fill="#3056D3"
                                    />
                                <circle
                                    cx="132"
                                    cy="1.66683"
                                    r="1.66667"
                                    transform="rotate(-90 132 1.66683)"
                                    fill="#3056D3"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
                    <div className="mt-10 lg:mt-0">
                    <Zoom top>
                        <span className="font-semibold text-lg text-primary mb-2 block">
                        Why Choose Us
                        </span>
                        <h2 className="font-bold text-3xl sm:text-4xl text-dark mb-8">
                            Make your customers happy by giving services.
                        </h2>
                    </Zoom>
                    <Zoom bottom>
                        <p className="text-base text-body-color mb-8">
                        Webhub has been established as a software company for more than a year. We not only provide software services for businesses, but also provide technical knowledge sharing and courses for young people
                        </p>
                        <p className="text-base text-body-color mb-12">
                            If you need software for your business, you can trust and hire WHM. If you want to know more about WHM's services , you can contact us 24/7 leaving message or cotact us within office time by phone call.
                        </p>
                        <NavLink to={'/contactus'} >
                                <Button color='primary' endIcon={<BiArrowBack className='rotate-180 text-xl' />}>
                                    Contact
                                </Button>
                        </NavLink>
                    </Zoom>
                    </div>
                </div>
            </div>
        </div>
        </section>

    </motion.div>

    </>
  )
}

export default About