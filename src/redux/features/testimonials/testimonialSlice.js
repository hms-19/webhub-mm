import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data : {},
  testimonial : {}
}

export const testimonialSlice = createSlice({
    name: 'testimonials',
    initialState,
    reducers : {
        setTestimonials : (state,action) => {
            state.data = action.payload
        },
        singleTestimonial : (state,action) => {
            state.testimonial = action.payload  
        }
    }
})


export const { setTestimonials,singleTestimonial } = testimonialSlice.actions
export const getAllTestimonials = (state) => state.testimonials.data
export const getSingleTestimonial = (state) => state.testimonials.testimonial
export default testimonialSlice.reducer