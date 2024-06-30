import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser, userAction } from 'entities/User'
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage'

interface ILoginByUserName {
  username: string
  password: string
}

export const loginByUserName = createAsyncThunk<IUser, ILoginByUserName, { rejectValue: string }>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userAction.setAuthData(response.data))

            return response.data
        } catch {
            return thunkAPI.rejectWithValue('error')
        }
    },
)
