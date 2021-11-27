import React from 'react';

import { Nav, NavLink, NavMenu, Bars } from './Navbar';
import { Home, About, Prout, Signup, Login } from '../Link/';

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <Home />
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink activeStyle>
            <About />
          </NavLink>
          <NavLink activeStyle>
            <Prout />
          </NavLink>
          <NavLink activeStyle>
            <Signup />
          </NavLink>
          <NavLink focusStyle>
            <Login />
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Navbar;
