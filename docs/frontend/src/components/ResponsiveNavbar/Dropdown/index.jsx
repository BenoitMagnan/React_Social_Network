import React from 'react';
import {
  DropdownContainer,
  CloseIcon,
  Icon,
  AdjustIcon,
  DropdownWrapper,
  DropdownMenu,
} from './Dropdown';
import { Home, About, Post, Signup, Login } from '../Link';
import AdjustMode from '../../AdjustMode';
import { useTheme, useUser } from '../../../utils/hooks';
import Disconnect from '../../Disconnect';

function Dropdown({ isOpen, toggle }) {
  const { theme } = useTheme();
  const { isLoggedIn } = useUser();

  if (!isLoggedIn) {
    return (
      <DropdownContainer isOpen={isOpen} onClick={toggle} theme={theme}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <AdjustIcon>
          <AdjustMode />
        </AdjustIcon>
        <DropdownWrapper>
          <DropdownMenu>
            <Home />
            <About />
            <Post />
            <Signup />
            <Login />
          </DropdownMenu>
        </DropdownWrapper>
      </DropdownContainer>
    );
  } else {
    return (
      <DropdownContainer isOpen={isOpen} onClick={toggle} theme={theme}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <AdjustIcon>
          <AdjustMode />
        </AdjustIcon>
        <DropdownWrapper>
          <DropdownMenu>
            <Home />
            <About />
            <Post />
            <Disconnect />
          </DropdownMenu>
        </DropdownWrapper>
      </DropdownContainer>
    );
  }
}

export default Dropdown;
