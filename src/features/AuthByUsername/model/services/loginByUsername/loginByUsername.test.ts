import { loginByUserName } from './loginByUsername'
import { userAction } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('async thunk loginByUsername', () => {
    test('success login', async () => {
        const thunk = new TestAsyncThunk(loginByUserName)
        const userValue = { username: '123', id: 1 }

        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
        const result = await thunk.callThunk({ username: '123', password: '123' })

        expect(thunk.dispatch).toHaveBeenCalledWith(userAction.setAuthData(userValue))
        expect(thunk.dispatch).toHaveBeenCalledTimes(3)

        expect(thunk.api.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(userValue)
    })

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUserName)

        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk({ username: '123', password: '123' })

        expect(thunk.dispatch).toHaveBeenCalledTimes(2)
        expect(thunk.api.post).toHaveBeenCalled()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual('error')
    })
})