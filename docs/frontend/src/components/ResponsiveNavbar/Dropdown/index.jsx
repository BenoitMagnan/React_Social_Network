import React from 'react';
import {
  DropdownContainer,
  CloseIcon,
  Icon,
  DropdownWrapper,
  DropdownMenu,
  DropdownButtonWrapper,
} from './Dropdown';
import { Home, About, Prout, Signup, Login } from '../Link';

function Dropdown({ isOpen, toggle }) {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          <Home />
          <About />
          <Prout />
          <Signup />
          <Login />
        </DropdownMenu>
        <DropdownButtonWrapper>
          <Login />
        </DropdownButtonWrapper>
      </DropdownWrapper>
    </DropdownContainer>
  );
}

export default Dropdown;
