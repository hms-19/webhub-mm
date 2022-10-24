import React from 'react'
import { Zoom } from 'react-reveal'
import { useForm } from "react-hook-form";
import { api } from '../../api';

const Form = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async  data => {

        const res = await api.post('/contactus',data)

        console.log(res.data)
    }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            <button
                type="submit"
                className="
                w-full
                text-white
                bg-primary
                rounded
                bg-primary
                p-3
                transition
                "
                
                >
            Send Message
            </button>
            </div>
        </Zoom>
    </form>
  )
}

export default Form