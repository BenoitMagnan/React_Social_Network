import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../../utils/style/colors/baseColors';

const StyledNavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border: 1px solid transparent;
  transition: 200ms ease-out;
  &:active {
    color: ${colors.primary};
    transition: 0ms;
  }
  ${(props) =>
    props.logo
      ? `
        &:hover {
            border-radius: 5px;
            border: 1px solid white;
        }
    `
      : ''}
  ${(props) =>
    props.focus
      ? `
      &:hover{
        outline: none;
            text-decoration: underline;
          }
      &:focus {
          outline: none;
          border-radius: 5px;
          border: 1px solid white;
      }
      
      @media screen and (max-width: 768px) {
      &:active {
        text-decoration: underline;
        border-radius: 0;
        border: none;
        color: ${colors.tertiary};
      }
      &:focus {
        border-radius: 0;
      }
    }
    `
      : ''}
      ${(props) =>
    props.hightLightStyle
      ? `
        border-radius: 4px;
        background: ${colors.primary};
        padding: 15px 30px;
        color: ${colors.tertiary};
        cursor: pointer;
        text-decoration: none;
        margin-left: 24px;
        &:active{
        color: black;
            border: 1px solid transparent;
        }
        &:focus {
          text-decoration: underline;
          border: 1px solid ${colors.tertiary};
        }
        @media screen and (max-width: 768px) {
          margin-left: 0;
          border-radius: 0;
          background: white;
          color:black;
        }
    `
      : ''}
`;

const StyledLink = styled(Link)`
  color: ${colors.quadra};
  &:hover {
    text-decoration: none;
  }
  &:focus {
    text-decoration: underline;
    outline: none;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 5px;
  }
`;

export { StyledNavLink, StyledLink };
