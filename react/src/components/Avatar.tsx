import styled from "styled-components";

interface AvatarProps {
  src?: string | null | undefined;
}

const StyledAvatar: React.FC<AvatarProps> = ({ src }) => {
  return <AvatarImg src={src || "/images/placeholder.jpg"} alt="Avatar" />;
};

export default StyledAvatar;

const AvatarImg = styled.img`
  border-radius: 50%;
  height: 27px;
  width: 27px;

  margin-left: 0.5rem;

  border: 1px solid #121212;
`;
