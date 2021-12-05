import { useContext } from 'react';
import { ThemeContext } from '../context';

function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
}

export { useTheme };
