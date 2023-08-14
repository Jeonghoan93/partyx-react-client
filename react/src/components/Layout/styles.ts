import styled from "styled-components";
import { sizes } from "../../utils/styles";

export const Header = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("/bg.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  position: relative;
  margin-bottom: 50px;
`;
export const Main = styled.main`
  max-width: ${sizes.screenMaxWidth}px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;