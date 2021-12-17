import styled from 'styled-components';
import {
  darkerColors,
  darkestColors,
  lighterColors,
  lightestColors,
  mediumColors,
} from '../../utils/style/colors';

export const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) =>
    theme === 'light' ? `${mediumColors.grey}` : `${lighterColors.grey}`};
  box-shadow: ${({ theme }) =>
    theme === 'light'
      ? `0px 0px 10px ${darkestColors.grey}`
      : `0px 0px 10px ${lighterColors.grey}`};
  width: 70%;
  padding: 20px 0;
  margin: 30px auto;
  border-radius: 5px;
  @media screen and (max-width: 800px) {
    width: 60%;
  }
`;

export const PostText = styled.span`
  margin: 0px 20px;
  color: ${({ theme }) =>
    theme === 'light' ? `${lightestColors.grey}` : `${darkestColors.grey}`};
  width: 100%;
  border-radius: 5px;
  & > * {
    width: 100%;
    text-align: center;
    margin: 0;
  }
`;
