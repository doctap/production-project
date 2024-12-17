import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { IStateSchema } from './StateSchema'
import { createReducerManager } from './ReducerManager'
import { $api } from 'shared/api/api'
import { NavigateFunction } from 'react-router-dom'

export const createReduxStore = (
    initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>,
    navigate?: NavigateFunction
) => {
    const staticReducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(staticReducers)

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: _IS_DEV_,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => (getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                }
            }
        })),
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
