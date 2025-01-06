import { createSlice } from '@reduxjs/toolkit'
import { IProfileSchema } from '../types/ProfileSchema'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

const initialState: IProfileSchema = {
    isLoading: false,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProfileData.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: profileAction } = profileSlice
export const { reducer: profileReducer } = profileSlice
