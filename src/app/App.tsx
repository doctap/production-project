import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { classNames } from 'shared/lib';
import { useTheme } from 'app/providers/themeProvider';
import { HomePage } from 'pages/homePage';
import { AboutPage } from 'pages/aboutPage';

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button type="button" onClick={toggleTheme}>toggleTheme</button>
      <Link to='/'>Home</ Link>
      <Link to='/about'>About</ Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
};
