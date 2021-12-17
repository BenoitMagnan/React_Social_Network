import { useContext } from 'react';
import { ThemeContext, UserContext } from '../context';

function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
}

function useUser() {
  const { isLoggedIn, toggleIsLoggedIn } = useContext(UserContext);
  return { isLoggedIn, toggleIsLoggedIn };
}

export { useTheme, useUser };
