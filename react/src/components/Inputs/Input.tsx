import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";
import styled from "styled-components";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  register,
  required,
  errors,
}) => {
  return (
    <InputContainer>
      {formatPrice && <DollarIcon />}
      <StyledInput
        id={id}
        type={type}
        disabled={disabled}
        formatPrice={formatPrice}
        error={!!errors[id]}
        {...register(id, { required })}
      />
      <InputLabel error={!!errors[id]} formatPrice={formatPrice}>
        {label}
      </InputLabel>
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const DollarIcon = styled(BiDollar).attrs({ size: 24 })`
  position: absolute;
  top: 5px;
  left: 2px;
  color: #6b7280;
`;

const StyledInput = styled.input<{ formatPrice?: boolean; error?: boolean }>`
  width: 100%;
  padding: ${({ formatPrice }) =>
    formatPrice ? "4px 16px 4px 40px" : "4px 16px"};
  font-weight: 300;
  background-color: #fff;
  border: 2px solid ${({ error }) => (error ? "#F87171" : "#D1D5DB")};
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  &:focus {
    border-color: ${({ error }) => (error ? "#F87171" : "#000")};
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const InputLabel = styled.label<{ error?: boolean; formatPrice?: boolean }>`
  position: absolute;
  top: 5px;
  left: ${({ formatPrice }) => (formatPrice ? "40px" : "16px")};
  font-size: 1rem;
  transform: translateY(0);
  transition: all 0.15s ease;
  color: ${({ error }) => (error ? "#F87171" : "#9CA3AF")};
  z-index: 10;
  pointer-events: none;

  ${StyledInput}:focus + & {
    transform: translateY(-16px) scale(0.75);
  }
`;
