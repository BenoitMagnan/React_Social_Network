import styled from 'styled-components';
import {
  darkerColors,
  darkestColors,
  lighterColors,
  lightestColors,
  mediumColors,
  message,
} from '../../utils/style/colors';

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: ${({ theme }) =>
    theme === 'light' ? `${lighterColors.grey}` : `${lightestColors.grey}`};
  box-shadow: ${({ theme }) =>
    theme === 'light'
      ? `0 0 5px ${darkerColors.grey}`
      : `0 0 5px ${mediumColors.grey}`};
  width: 100%;
  margin: 1.5rem 0;
  font-size: 0.8rem;
  border-radius: 5px;
  appearance: none;
  &[type='text'],
  &[type='email'],
  &[type='password'],
  &[type='textarea'] {
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
  }
  & input {
    width: 80%;
    margin: 0 auto;
  }
  & h1 {
    padding-left: 1rem;
    font-size: 1.2rem;
  }
`;

export const CommentButton = styled.button`
  background-color: ${({ theme }) =>
    theme === 'light'
      ? `${mediumColors.secondary}`
      : `${mediumColors.primary}`};
  color: ${darkestColors.grey};
  display: flex;
  padding: 0.8em 2em;
  border-radius: 5px;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  box-shadow: ${({ theme }) =>
    theme === 'light'
      ? `0 0 5px ${darkerColors.grey}`
      : `0 0 5px ${mediumColors.grey}`};
  margin: 1rem auto 2rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:focus {
    outline-style: solid;
    outline-width: 1px;
    outline-offset: 3px;
    outline-color: ${({ theme }) =>
      theme === 'light' ? `${lightestColors.grey}` : `${darkestColors.grey}`};
    border-radius: 5px;
    transition: 100ms;
  }
`;

export const CommentError = styled.span`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
`;
