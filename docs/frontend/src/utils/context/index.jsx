import React, { useState, createContext } from 'react';
import { useFormik } from 'formik';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const toggleIsLoggedIn = () => {
    setIsLoggedIn(isLoggedIn === true ? false : true);
    localStorage.setItem('isLoggedIn', isLoggedIn);
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, toggleIsLoggedIn, setIsLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  );
}

const FormikContext = React.createContext({});

function Formik({ children, ...props }) {
  const formikStateAndHelpers = useFormik(props);
  return (
    <FormikContext.Provider value={formikStateAndHelpers}>
      {typeof children === 'function'
        ? children(formikStateAndHelpers)
        : children}
    </FormikContext.Provider>
  );
}

export { ThemeContext, ThemeProvider, Formik };
