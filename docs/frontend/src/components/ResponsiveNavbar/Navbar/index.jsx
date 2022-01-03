import React from 'react';

import { Nav, NavLink, NavMenu, Bars } from './Navbar';
import { Home, About, Post, Signup, Login, Profil } from '../Link/';
import Disconnect from '../../Disconnect';
import AdjustMode from '../../AdjustMode';
import { useTheme } from '../../../utils/hooks';

function Navbar({ toggle }) {
  const { theme } = useTheme();
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  if (isLoggedIn) {
    return (
      <>
        <Nav theme={theme}>
          <Home />
          <Bars onClick={toggle} theme={theme} />
          <NavMenu>
            <AdjustMode />
            <NavLink>
              <Post />
            </NavLink>
            <NavLink>
              <Profil />
            </NavLink>
            <Disconnect />
          </NavMenu>
        </Nav>
      </>
    );
  } else {
    return (
      <>
        <Nav theme={theme}>
          <Home />
          <Bars onClick={toggle} theme={theme} />
          <NavMenu>
            <AdjustMode />
            <NavLink>
              <About />
            </NavLink>
            <NavLink>
              <Post />
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
}

export default Navbar;
