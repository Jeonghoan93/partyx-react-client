import styled, { css } from "styled-components";
import { colors, sizes } from "../../utils/styles";

export const Menu = styled.div`
  display: flex;
  padding: 15px 0;
  max-width: ${sizes.screenMaxWidth}px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${sizes.screenMaxWidth}px) {
    margin-left: 1.3%;
    margin-right: 1.3%;
  }
`;
export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
`;

export const ListItem = styled.li<{ isActive: boolean }>`
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 99px;
  color: ${colors.textWhite};
  text-decoration: none;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    background-color: hsla(0, 0%, 100%, 0.1);
  }

  ${(props) =>
    props.isActive &&
    css`
      background-color: hsla(0, 0%, 100%, 0.1);
      border-color: #fff;
    `}
`;

export const Icon = styled.span``;

export const Span = styled.span`
  @media (max-width: ${sizes.screenMobileMaxWidth}px) {
    display: none;
  }
`;
