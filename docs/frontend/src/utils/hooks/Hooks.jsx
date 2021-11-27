import { useContext } from 'react';
import { ThemeContext } from '../context/Context';

function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
}

export { useTheme };
