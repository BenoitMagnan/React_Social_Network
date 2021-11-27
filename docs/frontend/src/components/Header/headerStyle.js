import styled from 'styled-components';
import colors from '../../utils/style/colors';

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: salmon;
  width: 100%;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: start;
  }
`;

const NavLogoContainer = styled.a`
  background-color: blue;
  display: flex;
  width: 50%;
  height: 50px;
  @media screen and (min-width: 500px) {
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    width: 500px;
  }
`;

const NavLogo = styled.img`
  display: flex;
  width: 100%;
`;

const ButtonContainer = styled.div`
  background-color: violet;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 75%;
`;

const LinkWrapper = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: red;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const LinkList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  width: 100%;
  position: relative;
  color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  ${(props) =>
    props.$isFullLink &&
    `width: 28%;
    color: white;
    border-radius: 30px;
    background-color: ${colors.primary};`}
  .items {
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    .items {
      text-align: center;
      height: 50px;
      width: 100%;
      border-bottom: 1px solid #fff;
      line-height: 50px;
    }
    .items:nth-child(1) {
      border-top: 1px solid #fff;
    }
  }
`;

export {
  NavContainer,
  NavLogoContainer,
  ButtonContainer,
  NavLogo,
  LinkWrapper,
  LinkList,
};
