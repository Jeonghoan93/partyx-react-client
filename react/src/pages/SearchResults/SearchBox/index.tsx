import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchContext } from "../../../contexts/SearchContext";
import useSearch from "../../../hooks/useSearch";
import FilterCheckbox from "./FilterCheckBox";
import {
  Container,
  Form,
  FormGroup,
  FormLabel,
  Input,
  SearchButton,
  SeparatorLine,
  Title,
} from "./styles";

type Props = {};

const SearchBox = (props: Props) => {
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

export default SearchBox;
