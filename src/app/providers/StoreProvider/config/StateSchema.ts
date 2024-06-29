import { AnyAction, CombinedState, EnhancedStore, ReducersMapObject, Reducer } from '@reduxjs/toolkit'
import { ICounterSchema } from 'entities/Counter'
import { IUserSchema } from 'entities/User'
import { ILoginFormSchema } from 'features/AuthByUsername'

export interface IStateSchema {
  counter: ICounterSchema
  user: IUserSchema

  // Async reducers
  loginForm?: ILoginFormSchema
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
