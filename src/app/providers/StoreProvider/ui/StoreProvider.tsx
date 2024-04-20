import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { DeepPartial } from '@reduxjs/toolkit'
import { createReduxStore } from '../config/store'
import { IStateSchema } from '../config/StateSchema'

export interface IStoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<IStateSchema>
}

export const StoreProvider = ({ children, initialState }: IStoreProviderProps) => {
  const store = createReduxStore(initialState as IStateSchema)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
