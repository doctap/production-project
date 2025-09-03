import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProfileSchema, Profile } from '../types/ProfileSchema'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const initialState: IProfileSchema = {
    isLoading: false,
    readonly: true,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        editProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            }
        },
        cancelEditingProfile: state => {
            state.readonly = true
            state.form = state.data
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchProfileData.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
            // updateProfileData
            .addCase(updateProfileData.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: profileAction } = profileSlice
export const { reducer: profileReducer } = profileSlice
