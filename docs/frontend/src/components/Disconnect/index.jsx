import { DisconnectContainer } from './disonnect';
import { DisconnectButton } from '../Buttons/Button';
import { FaPowerOff } from 'react-icons/fa';
import { useTheme, useUser } from '../../utils/hooks';
import { useNavigate } from 'react-router-dom';

function Disconnect() {
  const { theme } = useTheme();
  const { toggleIsLoggedIn } = useUser();
  const navigate = useNavigate();
  return (
    <DisconnectContainer>
      <DisconnectButton
        theme={theme}
        onClick={() =>
          toggleIsLoggedIn() /
          localStorage.clear() /
          localStorage.setItem('isLoggedIn', false) /
          navigate('/login')
        }
      >
        <FaPowerOff />
      </DisconnectButton>
    </DisconnectContainer>
  );
}

export default Disconnect;
