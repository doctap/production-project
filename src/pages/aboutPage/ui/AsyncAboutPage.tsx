import { lazy } from 'react'

export const AsyncAboutPage = lazy(async () => await new Promise(resolve => {
  // @ts-expect-error for delay emulation
  setTimeout(() => { resolve(import('./AboutPage')) }, 500)
}))
