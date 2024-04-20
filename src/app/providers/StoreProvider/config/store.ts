import { counterReducer } from 'entities/Counter'
import { configureStore } from '@reduxjs/toolkit'
import { IStateSchema } from './StateSchema'

export const createReduxStore = (initialState?: IStateSchema) => (
  configureStore<IStateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: _IS_DEV_,
    preloadedState: initialState,
  })
)
