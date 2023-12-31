import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Event from "../../../shared/interfaces/event";
import {
  CardColumn,
  CardContainer,
  CardLeft,
  CardMiddle,
  CardRight,
  PropertyAddress,
  PropertyDistance,
  PropertyFreeCancellation,
  PropertyFreeTaxi,
  PropertyHighLights,
  PropertyImage,
  PropertyName,
  PropertyRate,
  PropertyRateInfo,
  PropertyRateInfoText,
  PropertyRating,
  PropertyScoreSubText,
  PropertyScoreText,
  PropertyScoreTextContainer,
} from "./styles";

type Props = {
  event: Event;
  nights: number;
  adults: number;
};

const EventCard = ({ property, nights, adults }: Props) => {
  return (
    <CardContainer>
      <CardLeft>
        <Link to={`/properties/${property._id}`}>
          <PropertyImage src={property.images[0]} />
        </Link>
      </CardLeft>
      <CardMiddle>
        <Link to={`/properties/${property._id}`}>
          <PropertyName>{property.name}</PropertyName>
        </Link>
        <CardColumn>
          <PropertyAddress>{property.address}</PropertyAddress> •
          <PropertyDistance>{property.distance} m from centre</PropertyDistance>
        </CardColumn>
        {property.freeAirportTaxi && (
          <PropertyFreeTaxi>Free airport taxi</PropertyFreeTaxi>
        )}
        <PropertyHighLights
          dangerouslySetInnerHTML={{ __html: property.highlights }}
        />
        {property.freeCancellation && (
          <>
            <PropertyFreeCancellation style={{ fontWeight: "bold" }}>
              FREE cancellation • No prepayment needed
            </PropertyFreeCancellation>
            <PropertyFreeCancellation>
              You can cancel later, so lock in this great price today.
            </PropertyFreeCancellation>
          </>
        )}
      </CardMiddle>
      <CardRight>
        <CardColumn>
          <PropertyScoreTextContainer>
            <PropertyScoreText>Superb</PropertyScoreText>
            <PropertyScoreSubText>3200 reviews</PropertyScoreSubText>
          </PropertyScoreTextContainer>
          <PropertyRating>8.4</PropertyRating>
        </CardColumn>
        <PropertyRateInfo>
          <PropertyRateInfoText>
            {nights} night, {adults} adults
          </PropertyRateInfoText>
          <PropertyRate>
            ₹ {(property.cheapestPrice * nights).toFixed(2)}
          </PropertyRate>
          <PropertyRateInfoText>+₹ 0 taxes and charges</PropertyRateInfoText>
        </PropertyRateInfo>
        <Link to={`/properties/${property._id}`}>
          <Button variant="primaryLight">See Availabilty</Button>
        </Link>
      </CardRight>
    </CardContainer>
  );
};

export default EventCard;
