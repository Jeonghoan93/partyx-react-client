import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useFavorite from "src/hooks/useFavorite";
import { SafeUser } from "src/types";
import styled from "styled-components";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const { hasFavorite, toggleFavorite } = useFavorite({
    listingId,
    currentUser,
  });

  return (
    <HeartWrapper onClick={toggleFavorite}>
      <OutlinedHeart size={28} />
      <FilledHeart hasFavorite={hasFavorite} size={24} />
    </HeartWrapper>
  );
};

export default HeartButton;

const HeartWrapper = styled.div`
  position: relative;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

const OutlinedHeart = styled(AiOutlineHeart)`
  fill: white;
  position: absolute;
  top: -2px;
  right: -2px;
`;

const FilledHeart = styled(AiFillHeart)<{ hasFavorite: boolean }>`
  fill: ${(props) => (props.hasFavorite ? "rose-500" : "neutral-500/70")};
`;
