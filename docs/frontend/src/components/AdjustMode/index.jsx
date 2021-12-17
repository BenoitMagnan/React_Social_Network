import { AdjustModeContainer } from './adjustModeStyle';
import { AdjustButton } from '../Buttons/Button';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context';
import { FaAdjust } from 'react-icons/fa';

function AdjustMode() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <AdjustModeContainer>
      <AdjustButton theme={theme} onClick={() => toggleTheme()}>
        {theme === 'light' ? <FaAdjust /> : <FaAdjust />}
      </AdjustButton>
    </AdjustModeContainer>
  );
}

export default AdjustMode;
