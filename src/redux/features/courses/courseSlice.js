import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data : {},
  service : {}
}

export const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers : {
        setCourses : (state,action) => {
            state.data = action.payload
        },
        singleCourse : (state,action) => {
            state.service = action.payload  
        }
    }
})


export const { setCourses,singleCourse } = courseSlice.actions
export const getAllCourses = (state) => state.courses.data
export const getSingleCourse = (state) => state.courses.service
export default courseSlice.reducer