import { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import { createReduxStore } from '../config/store'
import { IStateSchema } from '../config/StateSchema'

export interface IStoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<IStateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>
}

export const StoreProvider = ({ children, initialState, asyncReducers }: IStoreProviderProps) => {
    const navigate = useNavigate()

    const store = createReduxStore(
        initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>,
        navigate,
    )

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
