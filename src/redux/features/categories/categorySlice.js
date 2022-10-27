import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data : {},
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers : {
        setCategories : (state,action) => {
            state.data = action.payload
        },
    }
})


export const { setCategories } = categorySlice.actions
export const getAllCategories = (state) => state.categories.data
export default categorySlice.reducer