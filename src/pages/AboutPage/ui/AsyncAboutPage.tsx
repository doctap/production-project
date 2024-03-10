import { lazy } from 'react'

export const AsyncAboutPage = lazy(async () => new Promise(resolve => {
  // @ts-expect-error for delay emulation
  setTimeout(() => { resolve(import('./AboutPage')) }, 500)
}))
