import styled from "styled-components";
import { colors, sizes } from "../../utils/styles";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.textDarkest};
  color: ${colors.textWhite};
  padding: 45px 0;

  @media (max-width: ${sizes.screenMaxWidth}px) {
    margin-left: 1.3%;
    margin-right: 1.3%;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const SubTitle = styled.span`
  font-size: 16px;
  color: ${colors.textLightGray};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 25px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border: none;
  padding: 9px;
  border-radius: 2px;
  font-size: 20px;
  color: ${colors.secondary};
`;

export const FormButton = styled.button`
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: ${colors.textDark};
  color: ${colors.textWhite};
  font-size: 18px;
  font-weight: 500;
  padding: 0 15px;
  cursor: pointer;
`;

export const CheckBoxGroup = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FormLabel = styled.label`
  font-size: 14px;
`;
