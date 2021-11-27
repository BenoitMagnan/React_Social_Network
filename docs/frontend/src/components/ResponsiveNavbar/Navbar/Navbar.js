import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import colors from '../../../utils/style/colors';

const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  > * {
    ${(props) =>
      props.activeStyle
        ? `
        &:hover {
          color: #15cdfc;
        }
        &:active{
            color: ${colors.primary};}
    `
        : ''}
    ${(props) =>
      props.focusStyle
        ? `
        border-radius: 4px;
        background: #05a03f;
        padding: 10px 22px;
        color: #fff;
        outline: none;
        border: none;
        cursor: pointer;
        text-decoration: none;
        margin-left: 24px;
        &:hover {
          color: black;
        }
        &:active{
            color: #fff;
        }
    `
        : ''}
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
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
