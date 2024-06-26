import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILoginFormSchema } from '../types/loginFormSchema'
import { loginByUserName } from '../services/loginByUsername/loginByUsername'

const initialState: ILoginFormSchema = {
    username: '',
    password: '',
    isLoading: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(loginByUserName.pending, state => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(loginByUserName.fulfilled, state => {
                state.isLoading = false
            })
            .addCase(loginByUserName.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: loginAction } = loginSlice
export const { reducer: loginReducer } = loginSlice
