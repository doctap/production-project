import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from 'app/providers/StoreProvider'
import { IProfile } from '../../types/ProfileSchema'
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData'

export const updateProfileData = createAsyncThunk<IProfile, void, IThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi

        const formData = getProfileFormData(getState())

        try {
            const response = await extra.api.put<IProfile>('/profile', formData)

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch {
            return rejectWithValue('error')
        }
    },
)
