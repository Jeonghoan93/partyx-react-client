import styled from "styled-components";
import { sizes } from "../../utils/styles";

export const Container = styled.div`
  display: flex;
  gap: 20px;

  max-width: ${sizes.screenMaxWidth}px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${sizes.screenMaxWidth}px) {
    margin-left: 1.3%;
    margin-right: 1.3%;
  }
`;

export const HiddenOnMobile = styled.div`
  @media (max-width: ${sizes.screenMobileMaxWidth}px) {
    display: none;
  }
`;
