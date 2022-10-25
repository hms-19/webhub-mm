import { configureStore } from '@reduxjs/toolkit'
import serviceReducer from '../features/services/serviceSlice'
import courseReducer from '../features/courses/courseSlice'
import testimonialReducer from '../features/testimonials/testimonialSlice'
import blogReducer from '../features/blogs/blogSlice'
import { blogsApi } from '../features/apiSlice'

export const store = configureStore({
  reducer: {
    services : serviceReducer,
    courses : courseReducer,
    testimonials : testimonialReducer,
    blogs : blogReducer
  },
})