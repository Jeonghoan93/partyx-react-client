import qs from "query-string";
import { useCallback } from "react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    const updatedQuery = {
      category: label,
    };

    // Update the URL with the new query parameters
    navigate({
      pathname: "/",
      search: qs.stringify(updatedQuery, { skipNull: true }),
    });
  }, [label, navigate]);

  return (
    <StyledContainer onClick={handleClick} selected={selected}>
      <Icon size={26} />
      <StyledLabel>{label}</StyledLabel>
    </StyledContainer>
  );
};

export default CategoryBox;

const StyledContainer = styled.div<{ selected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${(props) =>
    props.selected
      ? "#2D3748"
      : "#718096"}; // Assuming neutral-800 is #2D3748 and neutral-500 is #718096
  border-bottom-color: ${(props) =>
    props.selected ? "#2D3748" : "transparent"};

  &:hover {
    color: #2d3748; // Assuming neutral-800 is #2D3748
  }
`;

const StyledLabel = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
`;
