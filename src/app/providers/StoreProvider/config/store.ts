import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { IStateSchema } from './StateSchema'
import { createReducerManager } from './ReducerManager'

export const createReduxStore = (
    initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>,
) => {
    const staticReducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(staticReducers)

    const store = configureStore<IStateSchema>({
        reducer: reducerManager.reduce,
        devTools: _IS_DEV_,
        preloadedState: initialState,
    })

    // @ts-ignore
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
