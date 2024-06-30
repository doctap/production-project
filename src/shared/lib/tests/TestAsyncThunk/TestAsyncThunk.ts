import { AsyncThunkAction } from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/StoreProvider'

type ActionCreator<Returned, ThunkArg, RejectValue>
    = (args: ThunkArg) =>
        AsyncThunkAction<Returned, ThunkArg, { rejectValue: RejectValue }>

export class TestAsyncThunk<Returned, ThunkArg, RejectValue> {
    dispatch: jest.MockedFn<any>

    getState: () => IStateSchema

    actionCreator: ActionCreator<Returned, ThunkArg, RejectValue>

    constructor(actionCreator: ActionCreator<Returned, ThunkArg, RejectValue>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callThunk(args: ThunkArg) {
        const action = this.actionCreator(args)
        const result = await action(this.dispatch, this.getState, undefined)

        return result
    }
}
