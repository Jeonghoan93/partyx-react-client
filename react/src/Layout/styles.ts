import styled from "styled-components";
import { sizes } from "../utils/styles";

interface HeaderProps {
  isHomePage?: boolean;
}

export const Header = styled.div<HeaderProps>`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("/bg.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  position: relative;
  margin-bottom: 50px;

  height: ${({ isHomePage }) => (isHomePage ? "auto" : "200px")};

  @media (max-width: ${sizes.screenMobileMaxWidth}px) {
    height: ${({ isHomePage }) => (isHomePage ? "500px" : "350px")};
  }
`;

export const HeaderInside = styled.div`
  @media (max-width: ${sizes.screenMaxWidth}px) {
    margin-left: 1.3%;
    margin-right: 1.3%;
  }
`;

export const Main = styled.main`
  max-width: ${sizes.screenMaxWidth}px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  @media (max-width: ${sizes.screenMaxWidth}px) {
    margin-left: 1.3%;
    margin-right: 1.3%;
  }
`;
