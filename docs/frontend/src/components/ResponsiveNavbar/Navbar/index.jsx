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
