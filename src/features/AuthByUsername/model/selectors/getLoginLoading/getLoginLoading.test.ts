import { DeepPartial } from '@reduxjs/toolkit'
import { IStateSchema } from 'app/providers/StoreProvider'
import { getLoginLoading } from './getLoginLoading'

describe('selector getLoginLoading', () => {
    test('with true', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                isLoading: true
            }
        }
        expect(getLoginLoading(state as IStateSchema)).toBe(true)
    })

    test('with false', () => {
        const state: DeepPartial<IStateSchema> = {
            loginForm: {
                isLoading: false
            }
        }
        expect(getLoginLoading(state as IStateSchema)).toBe(false)
    })

    test('with empty state', () => {
        const state: DeepPartial<IStateSchema> = {}
        expect(getLoginLoading(state as IStateSchema)).toBe(false)
    })
})