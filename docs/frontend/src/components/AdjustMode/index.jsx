import { AdjustModeContainer } from './adjustModeStyle';
import { StyledButton } from '../Buttons/Button';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context/Context';
import { AdjustIcon } from '../../utils/style/fontwawesome';

function AdjustMode() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <AdjustModeContainer>
      <StyledButton theme={theme} onClick={() => toggleTheme()}>
        {theme === 'light' ? <AdjustIcon /> : <AdjustIcon />}
      </StyledButton>
    </AdjustModeContainer>
  );
}

export default AdjustMode;
