type FilterCheckboxProps = {
  label: string;
  count: number;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
  label,
  count,
  checked,
  onChange,
}) => {
  return (
    <CheckboxContainer>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <CheckboxLabel>
        {label} <Count>{count}</Count>
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

export default FilterCheckbox;

// Style

import styled from "styled-components";

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px; /* Gap between checkbox and label */
`;

export const CheckboxLabel = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Count = styled.span`
  color: grey; /* Grey color for count data */
  margin-left: auto; /* Ensures it's pushed to the far right */
`;
