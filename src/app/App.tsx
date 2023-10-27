import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib';
import { useTheme } from 'app/providers/themeProvider';
import { AppRouter } from './providers/router';

export const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button type="button" onClick={toggleTheme}>toggleTheme</button>
      <Link to='/'>Main</ Link>
      <Link to='/about'>About</ Link>
      <AppRouter />
    </div>
  )
};
