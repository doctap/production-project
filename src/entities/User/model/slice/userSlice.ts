import { createSlice } from '@reduxjs/toolkit'
import { IUserSchema } from '../types/user'

const initialState: IUserSchema = {
  userAuth: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export const { actions: userAction } = userSlice
export const { reducer: userReducer } = userSlice
