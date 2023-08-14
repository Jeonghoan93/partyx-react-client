import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { BsCalendarFill } from "react-icons/bs";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import useSearch from "../../hooks/useSearch";
import GroupCounter from "../GroupCounter";
import {
  Container,
  DateRangePickerContainer,
  GroupCounterContainer,
  Input,
  Item,
  SearchButton,
} from "./styles";

type GroupType = {
  adults: number;
};

type DateType = {
  startDate: Date;
  endDate: Date;
};

type Props = {
  initialCity?: string;
  initialDates?: DateType;
  initialGroup?: GroupType;
  cityPlaceholder?: string;
  redirectPath?: string;
};

const HeaderSearch: React.FC<Props> = ({
  initialCity = "",
  initialDates = {
    startDate: new Date(),
    endDate: new Date(),
  },
  initialGroup = {
    adults: 1,
  },
  cityPlaceholder = "Which city are you?",
  redirectPath = "/search_results",
}) => {
  const [isShowGroupCounter, setShowGroupCounter] = useState(false);
  const [isShowDateRangePicker, setShowDateRangePicker] = useState(false);
  const refGroupCounterContainer = useRef<HTMLDivElement>(null);
  const refGroupInput = useRef<HTMLInputElement>(null);
  const refDateRangePickerContainer = useRef<HTMLDivElement>(null);
  const refDateRangeInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useOnClickOutside([refDateRangePickerContainer, refDateRangeInput], () =>
    setShowDateRangePicker(false)
  );
  useOnClickOutside([refGroupCounterContainer, refGroupInput], () =>
    setShowGroupCounter(false)
  );

  const { city, setCity, dates, setDates, group, setGroup, setSearch } =
    useSearch();

  useEffect(() => {
    setCity(initialCity);
    setDates(initialDates);
    setGroup(initialGroup);
  }, [initialCity, initialDates, initialGroup, setCity, setDates, setGroup]);

  return (
    <Container>
      <Item>
        <MdLocationOn fontSize={20} />
        <Input
          type="search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder={cityPlaceholder}
        />
      </Item>
      <Item onClick={() => setShowDateRangePicker((prev) => !prev)}>
        <BsCalendarFill fontSize={15} />
        <Input
          type="text"
          value={`${format(dates.startDate, "MM/dd/yyyy")} - ${format(
            dates.endDate,
            "MM/dd/yyyy"
          )}`}
          ref={refDateRangeInput}
          readOnly
        />
        {isShowDateRangePicker && (
          <DateRangePickerContainer ref={refDateRangePickerContainer}>
            <DateRange
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={[{ ...dates, key: "selection" }]}
              onChange={(item) =>
                setDates({
                  startDate: item.selection.startDate || dates.startDate,
                  endDate: item.selection.endDate || dates.endDate,
                })
              }
            />
          </DateRangePickerContainer>
        )}
      </Item>
      <Item onClick={() => setShowGroupCounter((prev) => !prev)}>
        <FaUserAlt fontSize={16} />
        <Input
          type="text"
          value={`${group.adults} adults `}
          ref={refGroupInput}
          readOnly
        />
        {isShowGroupCounter && (
          <GroupCounterContainer ref={refGroupCounterContainer}>
            <GroupCounter group={group} setGroup={(group) => setGroup(group)} />
          </GroupCounterContainer>
        )}
      </Item>
      <SearchButton
        onClick={(e) => {
          e.preventDefault();
          if (!city) return;

          setSearch();
          navigate(redirectPath || "/search_results");
        }}
      >
        <FaSearch fontSize={16} />
      </SearchButton>
    </Container>
  );
};

export default HeaderSearch;
