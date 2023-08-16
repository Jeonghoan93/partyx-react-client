import styled from "styled-components";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  max-width: 2520px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 4px; /* default padding */
  padding-right: 4px; /* default padding */

  @media (min-width: 640px) {
    /* equivalent to tailwind's sm */
    padding-left: 2px;
    padding-right: 2px;
  }

  @media (min-width: 768px) {
    /* equivalent to tailwind's md */
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (min-width: 1280px) {
    /* equivalent to tailwind's xl */
    padding-left: 20px;
    padding-right: 20px;
  }
`;
