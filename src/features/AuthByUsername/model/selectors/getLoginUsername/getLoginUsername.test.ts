import { DeepPartial } from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('selector getLoginUsername', () => {
    test('with username', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                username: 'User name'
            }
        }
        expect(getLoginUsername(state as IStateSchema)).toBe('User name')
    })

    test('with empty state', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getLoginUsername(state as IStateSchema)).toBe('')
    })
})