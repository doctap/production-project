import { DeepPartial } from '@reduxjs/toolkit'
import { ILoginFormSchema } from '../types/loginFormSchema'
import { loginAction, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
    const state: DeepPartial<ILoginFormSchema> = {}

    test('setUsername', () => {
        expect(
            loginReducer(state as ILoginFormSchema, loginAction.setUsername('Name'))
        ).toEqual({username: 'Name'})
    })
    test('setPassword', () => {
        expect(
            loginReducer(state as ILoginFormSchema, loginAction.setPassword('Password'))
        ).toEqual({password: 'Password'})
    })
})