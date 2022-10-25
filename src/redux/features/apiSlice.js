import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const blogsApi = createApi({
    reducerPath : "blogsApi",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://webhub-api.test/api",
    }),
    endpoints : (builder) => ({
        getAllBlogs: builder.query({
            query : () => "/blogs"
        })
    })
})

export const { useGetAllBlogsQuery } = blogsApi