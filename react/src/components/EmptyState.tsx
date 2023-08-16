import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading.tsx";

// You might want to adjust the routing based on the library you use in React.js
// e.g., for react-router-dom, you'd use useNavigate.

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset,
}) => {
  const navigate = useNavigate();

  const handleReset = () => {
    navigate("/"); // Navigate to the homepage or wherever you wish to reset to
  };

  return (
    <StyledEmptyState>
      <Heading center title={title} subtitle={subtitle} />
      <ButtonWrapper>
        {showReset && (
          <Button outline label="Remove all filters" onClick={handleReset} />
        )}
      </ButtonWrapper>
    </StyledEmptyState>
  );
};

export default EmptyState;

const StyledEmptyState = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  width: 12rem; /* Equivalent to w-48 in Tailwind */
  margin-top: 1rem; /* Equivalent to mt-4 in Tailwind */
`;
