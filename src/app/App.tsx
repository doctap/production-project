import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/Router';
import { NavBar } from 'widgets/navBar';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', [theme])}>
      <NavBar />
      <AppRouter />
    </div>
  )
};
