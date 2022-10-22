import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data : []
}

export const serviceSlice = createSlice({
    name: 'services',
    initialState,
    reducers : {
        fetchServices : (state,action) => {
            return {
                ...state,
                data: action.payload
            }
        }
    }
})


export const { fetchServices } = serviceSlice.actions
export default serviceSlice.reducer