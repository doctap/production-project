import { DeepPartial } from '@reduxjs/toolkit'
import { getLoginError } from './getLoginError'
import { IStateSchema } from 'app/providers/StoreProvider'

describe('selector getLoginError', () => {
    test('with error', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                error: 'Error message'
            }
        }
        expect(getLoginError(state as IStateSchema)).toBe('Error message')
    })

    test('with empty state', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getLoginError(state as IStateSchema)).toBe('')
    })
})