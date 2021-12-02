import styled from 'styled-components';
import {
  darkestColors,
  lightestColors,
  mediumColors,
} from '../../utils/style/colors';

const StyledButton = styled.button`
  display: flex;
  padding: 1rem;
  border-radius: 100%;
  cursor: pointer;
  color: ${({ theme }) =>
    theme === 'light' ? `${mediumColors.grey}` : `${lightestColors.grey}`};
  background-color: ${({ theme }) =>
    theme === 'light' ? `${lightestColors.grey}` : `${mediumColors.grey}`};
  &:hover {
    transition: 0;
    outline-color: ${({ theme }) =>
      theme === 'light'
        ? `${mediumColors.secondary}`
        : `${mediumColors.primary}`};
    outline-style: solid;
    outline-offset: 0.3em;
  }
  &:focus {
    outline-color: ${({ theme }) =>
      theme === 'light'
        ? `${mediumColors.secondary}`
        : `${mediumColors.primary}`};
    outline-style: solid;
    outline-offset: 0.3em;
    outline-width: 0.28em;
  }
`;

export { StyledButton };
