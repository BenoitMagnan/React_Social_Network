import styled from 'styled-components';
import colors from '../../utils/style/colors';

const StyledButton = styled.button`
  display: flex;
  padding: 10px;
  border-radius: 100%;
  cursor: pointer;
  transition: 200ms;
  color: ${({ theme }) => (theme === 'light' ? 'white' : colors.tertiary)};
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.tertiary : 'white'};
`;

export { StyledButton };
