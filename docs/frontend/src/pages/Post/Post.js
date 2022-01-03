import styled from 'styled-components';
import {
  darkestColors,
  lightestColors,
  mediumColors,
} from '../../utils/style/colors';

export const PostContainer = styled.div`
  display: flex;
  &:not(:nth-child(4)) > * {
    color: ${({ theme }) =>
      theme === 'light' ? `${lightestColors.grey}` : `${darkestColors.grey}`};
  }
  &:nth-child(4) {
    color: black;
    font-weight: 700;
    background: ${({ theme }) =>
      theme === 'light'
        ? `${lightestColors.secondary}`
        : `${lightestColors.primary}`};
  }
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) =>
    theme === 'light' ? `${mediumColors.grey}` : `${lightestColors.grey}`};
  box-shadow: ${({ theme }) =>
    theme === 'light'
      ? `0px 0px 10px ${darkestColors.grey}`
      : `0px 0px 10px ${mediumColors.grey}`};
  width: 70%;
  min-width: 330px;
  padding: 20px 0;
  margin: 30px auto;
  border-radius: 5px;
  @media screen and (max-width: 800px) {
    width: 60%;
  }
`;

export const Holder = styled.div`
  display: flex;
  width: 100%;
  margin: 0 20px;
  padding: 0.8rem;
  border-radius: 5px;
`;

export const PostHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonHolder = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PostText = styled.span`
  width: 100%;
  border-radius: 5px;
  & > * {
    width: 100%;
    text-align: center;
    margin: 0;
  }
`;
