import styled from "styled-components";

import useCountries from "src/hooks/useCountries";
import { SafeUser } from "src/types";

import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <ImageContainer>
        <StyledImage src={imageSrc} alt="Listing Image" />
        <HeartButtonContainer>
          <HeartButton listingId={id} currentUser={currentUser} />
        </HeartButtonContainer>
      </ImageContainer>
    </>
  );
};

export default ListingHead;

// Styled components

const ImageContainer = styled.div`
  width: 100%;
  height: 60vh;
  overflow: hidden;
  border-radius: 0.5rem; // Approximated from rounded-xl of tailwind
  position: relative;
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

const HeartButtonContainer = styled.div`
  position: absolute;
  top: 1.25rem; // Converted from top-5 of tailwind
  right: 1.25rem; // Converted from right-5 of tailwind
`;
