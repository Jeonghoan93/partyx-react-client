import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../utils/styles";

interface MenuItemProps {
  onClickProp?: () => void;
  label: string;
  href?: string;
}

const StyledMenuItem: React.FC<MenuItemProps> = ({
  onClickProp,
  label,
  href,
}) => {
  if (href) {
    return (
      <StyledLink to={href} onClick={onClickProp}>
        {label}
      </StyledLink>
    );
  }

  return <MenuItemDiv onClick={onClickProp}>{label}</MenuItemDiv>;
};

export default StyledMenuItem;

const MenuItemDiv = styled.div`
  padding: 1rem;
  font-weight: 500;
  transition: background-color 0.3s;
  color: ${colors.textDarkest};

  &:hover {
    color: ${colors.textDark};
    font-weight: 600;
  }
`;

const StyledLink = styled(Link)`
  padding: 1rem;
  font-weight: 500;
  transition: background-color 0.3s;
  color: ${colors.textDarkest};
  text-decoration: none;

  &:hover {
    color: ${colors.textDark};
    font-weight: 600;
  }
`;
