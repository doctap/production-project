import { Reducer } from '@reduxjs/toolkit'
import { IReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { FC, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

export interface IDynamicModuleLoaderProps {
  reducers: ReducerList
  removeUnmount?: boolean
}

type ReducerEntry = [StateSchemaKey, Reducer]

export const DynamicModuleLoader: FC<IDynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeUnmount = false,
}) => {
  const store = useStore() as IReduxStoreWithManager
  const dispatch = useDispatch()

  const manageReducers = (action: '@INIT' | '@DESTROY') => {
    Object.entries(reducers)
      .forEach(([name, reducer]: ReducerEntry) => {
        if (action === '@INIT') {
          store.reducerManager.add(name, reducer)
          dispatch({ type: `@INIT ${name} reducer` })
        }
        if (action === '@DESTROY') {
          store.reducerManager.remove(name)
          dispatch({ type: `@DESTROY ${name} reducer` })
        }
      })
  }

  useEffect(
    () => {
      manageReducers('@INIT')

      return () => {
        if (!removeUnmount) manageReducers('@DESTROY')
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  )
}
