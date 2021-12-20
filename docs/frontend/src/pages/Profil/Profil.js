import styled from 'styled-components';
import {
  darkerColors,
  darkestColors,
  lighterColors,
  lightestColors,
} from '../../utils/style/colors';

export const InfosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Infos = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? `${lightestColors.grey}` : `${darkestColors.grey}`};
  background: ${({ theme }) =>
    theme === 'light' ? `${darkerColors.grey}` : `${lightestColors.grey}`};
  width: 45%;
  max-width: 350px;
  box-shadow: ${({ theme }) =>
    theme === 'light'
      ? `0px 0px 15px ${darkestColors.grey}`
      : `0px 0px 15px ${lighterColors.grey}`};
  border-radius: 5px;
  & > * {
    width: 100%;
    text-align: center;
    margin: 0;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
