import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/StoreProvider'
import { IProfile } from '../../types/ProfileSchema'

export const fetchProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi

        try {
            const response = await extra.api.get('/profile')

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch {
            return rejectWithValue('error')
        }
    },
)
