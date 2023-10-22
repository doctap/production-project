import { lazy } from 'react';

export const AsyncHomePage = lazy(() => new Promise(resolve => {
  //@ts-ignore
  // for delay emulation
  setTimeout(() => resolve(import('./HomePage')), 1500)
}));