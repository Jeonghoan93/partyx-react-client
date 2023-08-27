import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchContext } from "../../../contexts/SearchContext";
import useSearch from "../../../hooks/useSearch";
import FilterCheckbox from "./FilterCheckBox";

type Props = {};

const FilterBox = (props: Props) => {
  const { city, setCity, dates, setDates, group, setGroup, setSearch } =
    useSearch();
  const { dispatch } = useContext(SearchContext);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const _city = searchParams.get("city");
    if (_city) {
      setCity(_city);
      dispatch({ type: "SET_SEARCH", payload: { city: _city } });
    }
  }, []);

  return (
    <Container>
      <Title>Filter by:</Title>

      <SeparatorLine />

      <Form>
        <FormGroup>
          <FormLabel>Your Budget (per person)</FormLabel>
          <Input type="text" placeholder="€ Min" />
          <span>to</span>
          <Input type="text" placeholder="€ Max" />
        </FormGroup>

        <SeparatorLine />

        <FormGroup>
          <FormLabel>Event Type</FormLabel>
          {/* These would normally have some state handling and data fetching to determine counts */}
          <FilterCheckbox
            label="House party"
            count={10}
            checked={false}
            onChange={() => {}}
          />
          <FilterCheckbox
            label="Festival"
            count={7}
            checked={false}
            onChange={() => {}}
          />
          <FilterCheckbox
            label="Rave"
            count={7}
            checked={false}
            onChange={() => {}}
          />
          <FilterCheckbox
            label="Club event"
            count={7}
            checked={false}
            onChange={() => {}}
          />
        </FormGroup>

        <SeparatorLine />

        <FormGroup>
          <FormLabel>Distance from center of {city}</FormLabel>
          {/* Again, you'd normally have some state handling and data fetching here */}
          <FilterCheckbox
            label="Less than 1 km"
            count={5}
            checked={false}
            onChange={() => {}}
          />
          <FilterCheckbox
            label="Less than 3 km"
            count={12}
            checked={false}
            onChange={() => {}}
          />
          <FilterCheckbox
            label="Less than 5 km"
            count={5}
            checked={false}
            onChange={() => {}}
          />
          {/* ... Add other distances similarly */}
        </FormGroup>

        <SeparatorLine />

        <FormGroup>
          <FormLabel>Cancellation Policy</FormLabel>
          <FilterCheckbox
            label="Free cancellation"
            count={15}
            checked={false}
            onChange={() => {}}
          />
        </FormGroup>

        <SeparatorLine />

        <FormGroup>
          <FormLabel>Review Score</FormLabel>
          <FilterCheckbox
            label="Wonderful: 9+"
            count={12}
            checked={false}
            onChange={() => {}}
          />
          <FilterCheckbox
            label="Very Good: 8+"
            count={12}
            checked={false}
            onChange={() => {}}
          />
          <FilterCheckbox
            label="Good: 7+"
            count={12}
            checked={false}
            onChange={() => {}}
          />
        </FormGroup>

        <SearchButton
          onClick={(e) => {
            e.preventDefault();
            if (!city) return;

            setSearch();
          }}
        >
          Apply
        </SearchButton>
      </Form>
    </Container>
  );
};

export default FilterBox;

import styled from "styled-components";
import { colors } from "../../../utils/styles";

export const Container = styled.section`
  flex: 0.25;
  background-color: ${colors.primaryLightest};
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.15);
  padding: 15px;
  max-width: 300px;
  height: fit-content;
  margin: 0 auto;
`;

export const Title = styled.h3`
  font-weight: 800;
  font-size: 1rem;
  margin-bottom: 20px;
  color: ${colors.primaryDark};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FormLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${colors.textDark};
  margin-bottom: 5px;
`;

export const Input = styled.input`
  border: 1px solid ${colors.primary};
  border-radius: 5px;
  outline: none;
  padding: 6px;
  font-size: 1rem;
  transition: border 0.3s ease;

  &:focus {
    border-color: ${colors.primaryDark};
  }
`;

export const SearchButton = styled.button`
  border: none;
  outline: none;
  width: 100%;
  height: 45px;
  font-size: 1rem;
  background-color: ${colors.primary};
  color: ${colors.textWhite};
  margin-top: 35px;
  border-radius: 7px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.primaryDark};
  }
`;

export const SeparatorLine = styled.hr`
  border: 0;
  border-top: 1px solid ${colors.primaryLighter};
  margin: 10px -15px;
  width: calc(100% + 30px);
`;
