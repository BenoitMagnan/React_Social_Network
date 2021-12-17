import styled from 'styled-components';

const DisconnectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    width: 100%;
  }
`;

export { DisconnectContainer };
