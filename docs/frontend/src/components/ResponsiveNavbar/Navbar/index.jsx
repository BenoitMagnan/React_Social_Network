import React from 'react';

import { Nav, NavLink, NavMenu, Bars } from './Navbar';
import { Home, About, Prout, Signup, Login } from '../Link/';
import AdjustMode from '../../AdjustMode';
import { useTheme } from '../../../utils/hooks';

function Navbar({ toggle }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <Nav theme={theme}>
        <Home />
        <Bars onClick={toggle} theme={theme} />
        <NavMenu>
          <AdjustMode onClick={() => toggleTheme()} />
          <NavLink>
            <About />
          </NavLink>
          <NavLink>
            <Prout />
          </NavLink>
          <NavLink>
            <Signup />
          </NavLink>
          <NavLink>
            <Login />
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
