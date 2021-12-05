import styled from 'styled-components';
import {
  darkestColors,
  darkerColors,
  mediumColors,
  lighterColors,
  lightestColors,
  message,
} from '../../utils/style/colors';

const FormLabel = styled.label`
  font-size: 1.25em;
`;

const FormInput = styled.input`
  background-color: ${lightestColors.grey};
  color: ${darkestColors.grey};
  border: ${({ theme }) =>
    theme === 'light'
      ? `3px solid ${lightestColors.grey}`
      : `3px solid ${lighterColors.grey}`};
  display: flex;
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 0.8rem 0;
  font-size: 1rem;
  border-radius: 5px;
  appearance: none;
  &[type='text'],
  &[type='email'],
  &[type='password'],
  &[type='textarea'] {
    box-sizing: border-box;
    padding-left: 10px;
  }
  &:hover {
    border: ${({ theme }) =>
      theme === 'light'
        ? `3px solid ${mediumColors.secondary}`
        : `3px solid ${mediumColors.primary}`};
  }
  &:focus {
    outline-style: solid;
    outline-width: 3px;
    outline-color: ${({ theme }) =>
      theme === 'light'
        ? `${mediumColors.secondary}`
        : `${mediumColors.primary}`};
    border-radius: 5px;
    border: 3px solid transparent;
    transition: 100ms;
  }
`;

const FormError = styled.span`
  display: flex;
  margin-top: -1.3rem;
`;

const FormErrorMessage = styled.p`
  background: ${message.warningBackground};
  color: ${message.warning};
  border: 1px solid ${message.warning};
  border-radius: 5px;
  padding: 0px 10px;
  font-size: 0.7em;
  font-weight: 700;
`;

const FormButton = styled.button`
  background-color: ${({ theme }) =>
    theme === 'light'
      ? `${mediumColors.secondary}`
      : `${mediumColors.primary}`};
  color: ${darkestColors.grey};
  display: flex;
  padding: 0.8em 2em;
  border-radius: 5px;
  font-weight: 700;
  font-size: 1em;
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

export { FormLabel, FormInput, FormError, FormErrorMessage, FormButton };
