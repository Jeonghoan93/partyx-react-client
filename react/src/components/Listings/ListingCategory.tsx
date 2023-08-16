import { IconType } from "react-icons";
import styled from "styled-components";

interface CategoryViewProps {
  icon: IconType;
  label: string;
  description: string;
}

const CategoryView: React.FC<CategoryViewProps> = ({
  icon: Icon,
  label,
  description,
}) => {
  return (
    <CategoryContainer>
      <ContentContainer>
        <StyledIcon as={Icon} />
        <LabelContainer>
          <Label>{label}</Label>
          <Description>{description}</Description>
        </LabelContainer>
      </ContentContainer>
    </CategoryContainer>
  );
};

export default CategoryView;

// Styled components
const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem; // Converted from gap-6 of tailwind
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem; // Converted from gap-4 of tailwind
`;

const StyledIcon = styled.div`
  font-size: 40px;
  color: #9ca3af; // Rough approximation of text-neutral-600
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  font-size: 1.125rem; // Converted from text-lg of tailwind
  font-weight: 600; // Converted from font-semibold of tailwind
`;

const Description = styled.div`
  color: #9ca3af; // Rough approximation of text-neutral-500
  font-weight: 300; // Converted from font-light of tailwind
`;
