import styled from "styled-components";

interface AvatarProps {
  src?: string | null | undefined;
}

const StyledAvatar: React.FC<AvatarProps> = ({ src }) => {
  return <AvatarImg src={src || "/images/placeholder.jpg"} alt="Avatar" />;
};

export default StyledAvatar;

const AvatarImg = styled.img`
  border-radius: 9999px;
  height: 30px;
  width: 30px;

  border: 1px solid #eaeaea;
`;
