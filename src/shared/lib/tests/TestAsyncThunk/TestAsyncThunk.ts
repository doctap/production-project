import { AsyncThunkAction } from '@reduxjs/toolkit'
import { IStateSchema, IThunkConfig } from 'app/providers/StoreProvider'
import axios, { AxiosStatic } from 'axios'

type ActionCreator<Returned, ThunkArg, RejectValue>
    = (args: ThunkArg) =>
        AsyncThunkAction<Returned, ThunkArg, IThunkConfig<RejectValue>>

jest.mock('axios')
const mockedAxios = jest.mocked(axios, true)

export class TestAsyncThunk<Returned, ThunkArg, RejectValue> {
    dispatch: jest.MockedFn<any>

    getState: () => IStateSchema

    actionCreator: ActionCreator<Returned, ThunkArg, RejectValue>

    api: jest.MockedFunctionDeep<AxiosStatic>

    navigate: jest.MockedFn<any>

    constructor(actionCreator: ActionCreator<Returned, ThunkArg, RejectValue>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()

        this.navigate = jest.fn()
        this.api = mockedAxios
    }

    async callThunk(args: ThunkArg) {
        const action = this.actionCreator(args)
        const result = await action(
            this.dispatch,
            this.getState,
            {
                api: this.api,
                navigate: this.navigate,
            },
        )

        return result
    }
}
