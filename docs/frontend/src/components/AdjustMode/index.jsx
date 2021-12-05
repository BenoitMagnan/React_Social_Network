import { AdjustModeContainer } from './adjustModeStyle';
import { StyledButton } from '../Buttons/Button';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context';
import { FaAdjust } from 'react-icons/fa';

function AdjustMode() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <AdjustModeContainer>
      <StyledButton theme={theme} onClick={() => toggleTheme()}>
        {theme === 'light' ? <FaAdjust /> : <FaAdjust />}
      </StyledButton>
    </AdjustModeContainer>
  );
}

export default AdjustMode;
