import styled from "styled-components";
import { colors, sizes } from "../../utils/styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  color: ${colors.textDarkest};
  font-size: 14px;
  border: 4px solid ${colors.textDarkest};
  border-radius: 5px;
  max-height: 50px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -27px;

  z-index: 99;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);

  max-width: ${sizes.screenMaxWidth}px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${sizes.screenMaxWidth}px) {
    margin-left: 1.3%;
    margin-right: 1.3%;
  }

  @media (max-width: ${sizes.screenMobileMaxWidth}px) {
    flex-direction: column;
    align-items: stretch;
    max-height: none;
    border: 2px solid ${colors.textDarkest};
  }
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 50px;
  padding: 0 15px;
  cursor: pointer;
  position: relative;

  &:not(:first-child) {
    border-left: 4px solid ${colors.textDarkest};
  }

  @media (max-width: ${sizes.screenMobileMaxWidth}px) {
    border-left: none;
    border-top: 4px solid ${colors.textDarkest};

    &:first-child {
      border-top: none;
    }
  }
`;
export const Input = styled.input`
  border: none;
  outline: none;

  &::placeholder {
    font-size: 14px;
    color: ${colors.textDarkest};
  }
`;
export const SearchButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-left: 4px solid ${colors.textDarkest};
  height: 50px;
  padding: 0 15px;
  background-color: ${colors.textDarkest};
  font-size: 20px;
  color: ${colors.textWhite};
  cursor: pointer;
  justify-content: center;
`;
export const DateRangePickerContainer = styled.div`
  position: absolute;
  left: 0;
  top: 50px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
  z-index: 2;
`;
export const GroupCounterContainer = styled.div`
  position: absolute;
  top: 45px;
  left: 0;
`;
