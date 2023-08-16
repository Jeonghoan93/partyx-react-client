import styled from "styled-components";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <StyledHeading center={center}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </StyledHeading>
  );
};

export default Heading;

const StyledHeading = styled.div<{ center?: boolean }>`
  text-align: ${(props) => (props.center ? "center" : "start")};
`;

const Title = styled.div`
  font-size: 1.5rem; /* Equivalent to text-2xl in Tailwind */
  font-weight: bold; /* Equivalent to font-bold in Tailwind */
`;

const Subtitle = styled.div`
  font-weight: 300; /* Equivalent to font-light in Tailwind */
  color: #a1a1a1; /* Placeholder color for text-neutral-500, adjust accordingly */
  margin-top: 0.5rem; /* Equivalent to mt-2 in Tailwind */
`;
