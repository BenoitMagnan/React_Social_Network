import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import {
  darkestColors,
  darkerColors,
  lightestColors,
  mediumColors,
} from '../../../utils/style/colors/';

const Nav = styled.nav`
  border-bottom: 2px solid transparent;
  background: ${({ theme }) =>
    theme === 'light' ? `${darkestColors.grey}` : `${lightestColors.grey}`};
  border-bottom: ${({ theme }) =>
    theme === 'light'
      ? `2px solid ${mediumColors.secondary}`
      : `2px solid ${darkerColors.primary}`};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
`;

const Bars = styled(FaBars)`
  display: none;
  color: ${({ theme }) =>
    theme === 'light' ? `${lightestColors.grey}` : `${darkestColors.grey}`};
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 125%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export { Nav, NavLink, NavMenu, Bars };
