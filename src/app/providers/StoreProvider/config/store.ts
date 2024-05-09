import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AuthByUsername'
import { IStateSchema } from './StateSchema'

export const createReduxStore = (initialState?: IStateSchema) => {
  const rootReducer: ReducersMapObject<IStateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  }

  return configureStore<IStateSchema>({
    reducer: rootReducer,
    devTools: _IS_DEV_,
    preloadedState: initialState,
  })
}
