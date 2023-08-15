import { useQuery } from "@tanstack/react-query";
import { differenceInDays } from "date-fns";
import { useContext } from "react";
import { capitalizeFirstLetter } from "src/utils/textFormatTransformer";
import { SearchContext } from "../../../contexts/SearchContext";
import { getEvents } from "../../../services/events";
import PropertyCard from "./PropertyCard";
import { Container, Title } from "./styles";

type Props = {};

const PropertyCards = (props: Props) => {
  const { state } = useContext(SearchContext);
  const { data: events } = useQuery(["events", state.city], () =>
    getEvents({ city: state.city })
  );
  const nights =
    Math.abs(
      differenceInDays(
        new Date(state.dates.startDate),
        new Date(state.dates.endDate)
      )
    ) + 1;

  return (
    <Container>
      <Title>
        {state.city
          ? `${capitalizeFirstLetter(state.city)}: ${
              events?.length || 0
            } events found`
          : "Search city to show!"}
      </Title>

      {events &&
        events.map((property) => (
          <PropertyCard
            property={property}
            nights={nights}
            adults={state.group.adults}
            key={property._id}
          />
        ))}
    </Container>
  );
};

export default PropertyCards;
