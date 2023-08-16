import { IconType } from "react-icons";
import styled from "styled-components";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      outline={outline}
      small={small}
    >
      {Icon && <Icon size={24} className="icon" />}
      {label}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ outline?: boolean; small?: boolean }>`
  position: relative;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  width: 100%;

  background-color: ${(props) => (props.outline ? "white" : "#F43F5E")};
  border-color: ${(props) => (props.outline ? "black" : "#F43F5E")};
  color: ${(props) => (props.outline ? "black" : "white")};
  font-size: ${(props) => (props.small ? "0.875rem" : "1rem")};
  padding: ${(props) => (props.small ? "0.25rem 1rem" : "0.75rem 1rem")};
  font-weight: ${(props) => (props.small ? 300 : 600)};
  border-width: ${(props) => (props.small ? "1px" : "2px")};

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
  }

  .icon {
    position: absolute;
    left: 1rem;
    top: 0.75rem;
    font-size: 1.5rem;
    transform: translateY(-50%);
  }
`;
