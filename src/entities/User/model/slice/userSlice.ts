import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/localStorage'
import { IUser, IUserSchema } from '../types/user'

const initialState: IUserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.userAuth = action.payload
    },
    initAuthData: state => {
      const authData = localStorage.getItem(USER_LOCAL_STORAGE_KEY)
      if (authData) {
        state.userAuth = JSON.parse(authData)
      }
    },
    logout: state => {
      state.userAuth = undefined
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY)
    },
  },
})

export const { actions: userAction } = userSlice
export const { reducer: userReducer } = userSlice
