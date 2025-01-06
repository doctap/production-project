import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import {
    CombinedState,
    configureStore,
    ReducersMapObject,
    Reducer,
} from '@reduxjs/toolkit'
import { NavigateFunction } from 'react-router-dom'
import { $api } from 'shared/api/api'
import { IStateSchema } from './StateSchema'
import { createReducerManager } from './ReducerManager'

export const createReduxStore = (
    initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>,
    navigate?: NavigateFunction,
) => {
    const staticReducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(staticReducers)

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
        devTools: _IS_DEV_,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => (getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                },
            },
        })),
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
