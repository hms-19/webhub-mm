import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data : {},
  blog : {}
}

export const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers : {
        setBlogs : (state,action) => {
            state.data = action.payload
        },
        singleBlog : (state,action) => {
            state.blog = action.payload  
        }
    }
})


export const { setBlogs,singleBlog } = blogSlice.actions
export const getAllBlogs = (state) => state.blogs.data
export const getSingleBlog = (state) => state.blogs.blog
export default blogSlice.reducer