import { lazy } from 'react';

export const AsyncMainPage = lazy(() => new Promise(resolve => {
  //@ts-ignore
  // for delay emulation
  setTimeout(() => resolve(import('./MainPage')), 500)
}));