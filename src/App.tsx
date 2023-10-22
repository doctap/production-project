import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AsyncHomePage } from './pages/homePage/AsyncHomePage';
import { AsyncAboutPage } from './pages/aboutPage/AsyncAboutPage';
import { Suspense } from 'react';

export const App = () => {
  return (
    <>
      <Link to='/'>Home</ Link>
      <Link to='/about'>About</ Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<AsyncHomePage />} />
          <Route path='/about' element={<AsyncAboutPage />} />
        </Routes>
      </Suspense>
    </>
  )
};
