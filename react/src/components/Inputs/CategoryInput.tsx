import React from "react";
import { IconType } from "react-icons";
import styled, { css } from "styled-components";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  return (
    <CategoryContainer selected={selected} onClick={() => onClick(label)}>
      <Icon size={30} />
      <Label>{label}</Label>
    </CategoryContainer>
  );
};

export default CategoryBox;

// Styled Components

const CategoryContainer = styled.div<{ selected?: boolean }>`
  border-radius: 0.5rem;
  border: 2px solid;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  cursor: pointer;
  transition: border-color 0.3s;

  // Conditional Styling based on the 'selected' prop
  ${({ selected }) =>
    selected
      ? css`
          border-color: black;
        `
      : css`
          border-color: #d1d5db; // This is the hex for 'neutral-200' in Tailwind
        `};

  &:hover {
    border-color: black;
  }
`;

const Label = styled.div`
  font-weight: 600;
`;
