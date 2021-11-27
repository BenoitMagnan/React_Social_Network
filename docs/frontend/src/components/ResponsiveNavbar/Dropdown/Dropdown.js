import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import colors from '../../../utils/style/colors';

const DropdownContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${colors.primary};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 300ms ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  z-index: 999;
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const DropdownWrapper = styled.div`
  color: #fff;
`;

const DropdownMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  > * {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 200ms ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      transition: 200ms ease-in-out;
    }
  }

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

const DropdownButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  > * {
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    text-decoration: none;

    &:hover {
      transition: 200ms ease-in-out;
      background: #fff;
      color: ${colors.primary};
    }
  }
`;

export {
  DropdownContainer,
  CloseIcon,
  Icon,
  DropdownWrapper,
  DropdownMenu,
  DropdownButtonWrapper,
};
