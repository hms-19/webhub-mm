import React, { useState } from 'react'
import { Zoom } from 'react-reveal'
import { useForm } from "react-hook-form";
import { api } from '../../api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css'
import $ from 'jquery'
const Form = () => {

    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async  data => {

        setIsLoading(true)

        const res = await api.post('/contactus',data).then(function(res) {

            setIsLoading(false)
            $('#contactForm')[0].reset();
            // successful response flow
            toast('Message was sent successfully !', {
                position: toast.POSITION.BOTTOM_CENTER,
                className: 'toast-message'
            });
          })
          .catch(function(error) {
            // error response flow
            toast.error(error.message, {
                position: toast.POSITION.BOTTOM_CENTER,
                className: 'toast-message'
            });
          })
    }

  return (
    <>
        <form id='contactForm' onSubmit={handleSubmit(onSubmit)}>
        <Zoom bottom>
            <div  className="mb-6">
            <input
                {...register("name",{ required: true, maxLength: 100 })}
                aria-invalid={errors.name ? "true" : "false"} 
                type="text"
                placeholder="Your Name"
                className="
                w-full
                rounded
                py-3
                px-[14px]
                text-body-color text-base
                outline-none
                
                "
                style={{
                    'backgroundColor' : '#333',
                    'border' : "1px solid #333"
                }}
                />
                {errors.name?.type === 'required' && <p role="alert" className='text-red-500'>Name is required</p>}
            </div>
            <div  className="mb-6">
            <input
                {...register("email",{ required: true })}
                aria-invalid={errors.email ? "true" : "false"} 
                type="email"
                placeholder="Your Email"
                className="
                w-full
                rounded
                py-3
                px-[14px]
                text-body-color text-base
                outline-none
                "
                style={{
                    'backgroundColor' : '#333',
                    'border' : "1px solid #333"
                }}
                />
                {errors.email?.type === 'required' && <p role="alert" className='text-red-500'>Email is required</p>}

            </div>
            <div  className="mb-6">
            <input
                {...register("phone",{ required: true, maxLength: 100 })}
                aria-invalid={errors.phone ? "true" : "false"} 
                type="text"
                placeholder="Your Phone"
                className="
                w-full
                rounded
                py-3
                px-[14px]
                text-body-color text-base     
                outline-none
                "
                style={{
                    'backgroundColor' : '#333',
                    'border' : "1px solid #333"
                }}
                />
                {errors.phone?.type === 'required' && <p role="alert" className='text-red-500'>Phone is required</p>}

            </div>
            <div  className="mb-6">
            <textarea
                {...register("message",{ required: true, maxLength: 100 })}
                aria-invalid={errors.message ? "true" : "false"} 
                rows="6"
                placeholder="Your Message"
                className="
                w-full
                rounded
                py-3
                px-[14px]
                text-body-color text-base
                resize-none
                outline-none
                "
                style={{
                    'backgroundColor' : '#333',
                    'border' : "1px solid #333"
                }}
                ></textarea>
                {errors.message?.type === 'required' && <p role="alert" className='text-red-500'>Message is required</p>}

            </div>
            <div>
            {
                isLoading ?

                <button
                type="submit"
                className="
                w-full
                text-gray-400
                bg-primary
                rounded
                p-3
                transition
                flex gap-4 items-center justify-center
                "
                disabled
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-repeat animate-spin" viewBox="0 0 16 16">
                    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
                    <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
                    </svg>
                    <p> Sending Message</p>
                </button>

                :
                <button
                type="submit"
                className="
                w-full
                text-white
                bg-primary
                rounded
                p-3
                transition
                "
                >
            Send Message
            </button>
            }
            </div>
        </Zoom>
    </form>

    <ToastContainer />
    </>
  )
}

export default Form