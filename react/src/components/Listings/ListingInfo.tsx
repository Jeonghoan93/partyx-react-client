import { IconType } from "react-icons";
import styled from "styled-components";

import useCountries from "src/hooks/useCountries";
import { SafeUser } from "src/types";

import Avatar from "../Avatar";
import Map from "../Map"; // Assuming you've a similar component in React environment
import ListingCategory from "./ListingCategory";

interface ListingInfoProps {
  user: SafeUser;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <Container>
      <Header>
        <HostTitle>
          Hosted by {user?.name}
          <Avatar src={user?.image} />
        </HostTitle>
        <Details>
          <Detail>{guestCount} guests</Detail>
          <Detail>{roomCount} rooms</Detail>
          <Detail>{bathroomCount} bathrooms</Detail>
        </Details>
      </Header>
      <Separator />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category?.label}
          description={category?.description}
        />
      )}
      <Separator />
      <Description>{description}</Description>
      <Separator />
      <Map center={coordinates} />
    </Container>
  );
};

export default ListingInfo;

// Styled components

const Container = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: 2rem; // Adjust according to your design
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const HostTitle = styled.div`
  font-size: 1.25rem; // text-xl
  font-weight: 600; // font-semibold
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem; // gap-4
  font-weight: 300; // font-light
  color: #9ca3af; // text-neutral-500
`;

const Detail = styled.div``;

const Separator = styled.hr``;

const Description = styled.div`
  font-size: 1.125rem; // text-lg
  font-weight: 300; // font-light
  color: #9ca3af; // text-neutral-500
`;
