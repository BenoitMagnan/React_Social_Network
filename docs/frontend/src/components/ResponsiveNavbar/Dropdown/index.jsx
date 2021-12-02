import React from 'react';
import {
  DropdownContainer,
  CloseIcon,
  Icon,
  AdjustIcon,
  DropdownWrapper,
  DropdownMenu,
} from './Dropdown';
import { Home, About, Prout, Signup, Login } from '../Link';
import AdjustMode from '../../AdjustMode';
import { useTheme } from '../../../utils/hooks';

function Dropdown({ isOpen, toggle }) {
  const { theme } = useTheme();
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
          <Prout />
          <Signup />
          <Login />
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownContainer>
  );
}

export default Dropdown;
