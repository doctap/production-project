import { FC, lazy } from 'react'
import { ILoginFormProps } from './LoginForm'

export const LoginFormAsync = lazy<FC<ILoginFormProps>>(async () => new Promise(resolve => {
    setTimeout(() => { resolve(import('./LoginForm')) }, 500)
}))
