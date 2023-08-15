import styled from "styled-components";
import { colors } from "../../../utils/styles";

export const Container = styled.section`
  flex: 0.25;
  background-color: ${colors.primaryLightest};
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
  padding: 15px;
  max-width: 300px;
  height: fit-content;
  margin: 0 auto;
`;

export const Title = styled.h3`
  font-weight: 800;
  font-size: 1rem;
  margin-bottom: 20px;
  color: ${colors.primaryDark};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FormLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${colors.textDark};
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  outline: none;
  padding: 6px;
  font-size: 1rem;
  transition: border 0.3s ease;

  &:focus {
    border-color: ${colors.primaryDark};
  }
`;

export const SearchButton = styled.button`
  border: none;
  outline: none;
  width: 100%;
  height: 45px;
  font-size: 1rem;
  background-color: ${colors.primary};
  color: ${colors.textWhite};
  margin-top: 35px;
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.primaryDark};
  }
`;

export const SeparatorLine = styled.hr`
  border: 0;
  border-top: 1px solid ${colors.primaryLighter};
  margin: 10px -15px;
  width: calc(100% + 30px);
`;
