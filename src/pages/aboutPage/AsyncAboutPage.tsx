import { lazy } from 'react';

export const AsyncAboutPage = lazy(() => new Promise(resolve => {
  // @ts-ignore
  // for delay emulation
  setTimeout(() => resolve(import('./AboutPage')), 1500);
}));