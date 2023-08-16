import { format } from "date-fns";
import React, { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Assuming useCountries hook is also converted to be used in React context
import useCountries from "src/hooks/useCountries";
import { SafeListing, SafeReservation, SafeUser } from "src/types";

import Button from "../Button";
import HeartButton from "../HeartButton";

interface ListingCardProps {
  data: SafeListing;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const navigate = useNavigate();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [disabled, onAction, actionId]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <ListingContainer onClick={() => navigate(`/listings/${data.id}`)}>
      <ImageContainer>
        <ListingImage src={data.imageSrc} alt="Listing" />
        <HeartButtonPosition>
          <HeartButton listingId={data.id} currentUser={currentUser} />
        </HeartButtonPosition>
      </ImageContainer>
      <LocationText>
        {location?.region}, {location?.label}
      </LocationText>
      <CategoryText>{reservationDate || data.category}</CategoryText>
      <PriceContainer>
        <PriceText>$ {price}</PriceText>
        {!reservation && <PriceLabel>night</PriceLabel>}
      </PriceContainer>
      {onAction && actionLabel && (
        <Button
          disabled={disabled}
          small
          label={actionLabel}
          onClick={handleCancel}
        />
      )}
    </ListingContainer>
  );
};

export default ListingCard;

// Styled Components

const ListingContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 1rem;
`;

const ListingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const HeartButtonPosition = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`;

const LocationText = styled.div`
  font-weight: 600;
  font-size: 1.125rem;
`;

const CategoryText = styled.div`
  color: #a1a1a1;
  font-weight: 300;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const PriceText = styled.div`
  font-weight: 600;
`;

const PriceLabel = styled.div`
  font-weight: 300;
`;
