import styled from "styled-components";
import { colors, sizes } from "../../utils/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${colors.textWhite};
  margin-top: 50px;
  padding-bottom: 80px;
  max-width: ${sizes.screenMaxWidth}px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${sizes.screenMaxWidth}px) {
    margin-left: 1.3%;
    margin-right: 1.3%;
  }
`;

export const Text = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 5px;

  @media (max-width: ${sizes.screenMaxWidth}px) {
    font-size: 33px;
  }
`;

export const SubText = styled.p`
  font-size: 22px;

  @media (max-width: ${sizes.screenMaxWidth}px) {
    font-size: 16px;
  }
`;
