import styled from "styled-components";
import { Range } from "react-date-range";

import Button from "../Button";
import Calendar from "../Inputs/Calendar";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <Container>
      <PriceSection>
        <Price>$ {price}</Price>
        <NightLabel>night</NightLabel>
      </PriceSection>
      <Separator />
      <CalendarWrapper>
        <Calendar
          value={dateRange}
          disabledDates={disabledDates}
          onChange={(value) => onChangeDate(value.selection)}
        />
      </CalendarWrapper>
      <Separator />
      <ButtonWrapper>
        <Button disabled={disabled} label="Reserve" onClick={onSubmit} />
      </ButtonWrapper>
      <Separator />
      <TotalSection>
        <TotalLabel>Total</TotalLabel>
        <TotalAmount>$ {totalPrice}</TotalAmount>
      </TotalSection>
    </Container>
  );
};

export default ListingReservation;

// Styled components

const Container = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb; // border-neutral-200
  overflow: hidden;
`;

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 1rem;
`;

const Price = styled.div`
  font-size: 2rem; // text-2xl
  font-weight: 600; // font-semibold
`;

const NightLabel = styled.div`
  font-weight: 300; // font-light
  color: #9ca3af; // text-neutral-600
`;

const Separator = styled.hr``;

const CalendarWrapper = styled.div``;

const ButtonWrapper = styled.div`
  padding: 1rem;
`;

const TotalSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-weight: 600; // font-semibold
  font-size: 1.125rem; // text-lg
`;

const TotalLabel = styled.div``;

const TotalAmount = styled.div``;
