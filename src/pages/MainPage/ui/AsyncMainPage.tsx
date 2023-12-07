import { lazy } from 'react'

export const AsyncMainPage = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error for delay emulation
  setTimeout(() => { resolve(import('./MainPage')) }, 500)
}))
