import React from "react";
import Select from "react-select";
import styled from "styled-components";

import useCountries from "src/hooks/useCountries";

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

interface CountrySelectProps {
  value?: CountrySelectValue;
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();

  return (
    <Wrapper>
      <StyledSelect
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <OptionLabel>
            <Flag>{option.flag}</Flag>
            <Label>
              {option.label},<Region>{option.region}</Region>
            </Label>
          </OptionLabel>
        )}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary: "black",
            primary25: "#ffe4e6",
          },
        })}
      />
    </Wrapper>
  );
};

export default CountrySelect;

// Styled Components

const Wrapper = styled.div``; // Placeholder wrapper, add styling if needed.

const StyledSelect = styled(Select)`
  .react-select__control {
    padding: 1rem;
    border-width: 2px;
  }

  .react-select__input {
    font-size: 1.125rem; // text-lg in Tailwind
  }

  .react-select__option {
    font-size: 1.125rem; // text-lg in Tailwind
  }
`;

const OptionLabel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const Flag = styled.div``; // Placeholder, add styling if needed.

const Label = styled.div``; // Placeholder, add styling if needed.

const Region = styled.span`
  color: #9ca3af; // Corresponds to text-neutral-500 in Tailwind
  margin-left: 0.25rem; // ml-1 in Tailwind
`;
