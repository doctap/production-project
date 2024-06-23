import { lazy } from 'react'

export const LoginFormAsync = lazy(async () => new Promise(resolve => {
  // @ts-expect-error for delay emulation
  setTimeout(() => { resolve(import('./LoginForm')) }, 500)
}))
