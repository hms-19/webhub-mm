import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data : {},
  service : {}
}

export const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers : {
        setServices : (state,action) => {
            state.data = action.payload
        },
        singleService : (state,action) => {
            state.service = action.payload  
        }
    }
})


export const { setServices,singleService } = serviceSlice.actions
export const getAllServices = (state) => state.services.data
export const getSingleService = (state) => state.services.service
export default serviceSlice.reducer