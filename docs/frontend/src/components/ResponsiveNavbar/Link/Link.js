import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  mediumColors,
  darkestColors,
  lightestColors,
  darkerColors,
  lighterColors,
} from '../../../utils/style/colors/';

const StyledNavLink = styled(Link)`
  color: ${({ theme }) =>
    theme === 'light' ? `${lightestColors.grey}` : `${darkerColors.grey}`};
  display: flex;
  align-items: center;
  font-weight: 700;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:active {
    color: ${({ theme }) =>
      theme === 'light'
        ? `${lightestColors.secondary}`
        : `${mediumColors.primary}`};
  }
  &:hover {
    outline: none;
    text-decoration: underline;
  }
  &:focus {
    outline-offset: 0.2em;
    outline-style: solid;
    text-decoration: underline;
    border-radius: 5px;
    outline-color: ${({ theme }) =>
      theme === 'light' ? ` ${lightestColors.grey}` : `${darkestColors.grey}`};
  }

  @media screen and (max-width: 768px) {
    &:active {
      text-decoration: underline;
      border-radius: 0;
      border: none;
      color: ${mediumColors.grey};
    }
    &:focus {
      border-radius: 0;
    }
  }
  ${(props) =>
    props.logo
      ? `
        &:hover {
            outline-style: solid;
            border-radius: 5px;
        }
    `
      : ''}

  &.hightLightStyle {
    background: ${({ theme }) =>
      theme === 'light'
        ? `${mediumColors.secondary}`
        : `${mediumColors.primary}`};
    border-radius: 5px;
    padding: 5px 30px;
    color: ${darkestColors.grey};
    margin-left: 24px;
    text-transform: uppercase;
    border: 2px solid transparent;
    &:active {
      color: ${darkestColors.grey};
    }

    @media screen and (max-width: 768px) {
      margin-left: 0;
      margin-top: 20px;
      border-radius: 0;
      background: ${lightestColors.grey};
      color: ${darkestColors.grey};
      @media screen and (orientation: landscape) {
        margin: 5vh 20vw;
        padding: 0;
        border-radius: 5px;
      }
    }
  }
`;

export default StyledNavLink;
