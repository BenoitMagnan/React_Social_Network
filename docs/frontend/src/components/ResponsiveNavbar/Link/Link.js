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
  color: ${lightestColors.grey};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 200ms ease-out;
  &:active {
    color: ${mediumColors.secondary};
    transition: 0ms;
  }
  &:hover {
    outline: none;
    text-decoration: underline;
  }
  &:focus {
    outline: none;
    text-decoration: underline;
    border-radius: 5px;
    border: 1px solid ${lightestColors.grey};
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
            border-radius: 5px;
            border: 1px solid ${lightestColors.grey};
        }
    `
      : ''}

  ${(props) =>
    props.hightLightStyle
      ? `
        background: ${mediumColors.secondary};
        border-radius: 5px;
        padding: 5px 30px;
        color: ${darkestColors.grey};
        cursor: pointer;
        text-decoration: none;
        margin-left: 24px;
        border: 2px solid transparent;
        &:active{
            color: ${darkestColors.grey};
            border: 2px solid ${darkerColors.grey};
        }
        &:focus{
        border: 2px solid ${darkerColors.grey};  
        }
        @media screen and (max-width: 768px) {
          margin-left: 0;
          border-radius: 0;
          background: ${lightestColors.grey};
          color:${darkestColors.grey};
          &:focus{
            border: 1px solid ${darkerColors.secondary};
          }
          @media screen and (orientation: landscape){
            margin: 5vh 20vw;
            padding: 0;
            border-radius: 5px;
          }
        }
    `
      : ''}
`;

const StyledLink = styled(Link)`
  color: ${mediumColors.secondary};
  &:hover {
    text-decoration: none;
  }
  &:focus {
    text-decoration: underline;
    outline: none;
    padding: 10px;
    border: 1px solid ${lightestColors.grey};
    border-radius: 5px;
  }
`;

export { StyledNavLink, StyledLink };
