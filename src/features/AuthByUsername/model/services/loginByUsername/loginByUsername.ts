import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/StoreProvider'
import axios from 'axios'
import { IUser, userAction } from 'entities/User'
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage'

interface ILoginByUserName {
  username: string
  password: string
}

export const loginByUserName = createAsyncThunk<IUser, ILoginByUserName, IThunkConfig<string>>(
    'login/loginByUserName',
    async (authData, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.post('/login', authData)

            if (!response.data) {
                throw new Error()
            }

            localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))
            dispatch(userAction.setAuthData(response.data))

            return response.data
        } catch {
            return rejectWithValue('error')
        }
    },
)
