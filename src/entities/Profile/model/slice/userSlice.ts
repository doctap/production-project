import { createSlice } from '@reduxjs/toolkit'
import { IProfileSchema } from '../types/ProfileSchema'

const initialState: IProfileSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
    readonly: undefined,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
})

export const { actions: profileAction } = profileSlice
export const { reducer: profileReducer } = profileSlice
