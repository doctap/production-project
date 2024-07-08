import { lazy } from 'react'

export const AsyncProfilePage = lazy(async () => new Promise(resolve => {
    // @ts-expect-error for delay emulation
    setTimeout(() => { resolve(import('./ProfilePage')) }, 500)
}))
