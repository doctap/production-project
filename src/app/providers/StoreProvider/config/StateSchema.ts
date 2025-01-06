import { AnyAction, CombinedState, EnhancedStore, ReducersMapObject, Reducer } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { ICounterSchema } from 'entities/Counter'
import { IProfileSchema } from 'entities/Profile'
import { IUserSchema } from 'entities/User'
import { ILoginFormSchema } from 'features/AuthByUsername'
import { NavigateFunction } from 'react-router-dom'

export interface IStateSchema {
  counter: ICounterSchema
  user: IUserSchema

  // Async reducers
  loginForm?: ILoginFormSchema
  profile?: IProfileSchema
}

export type StateSchemaKey = keyof IStateSchema

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>
  reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReducerManager
}

export interface IThunkExtraArgs {
  api: AxiosInstance
  navigate?: NavigateFunction
}

export interface IThunkConfig<T> {
  extra: IThunkExtraArgs
  rejectValue: T
}
