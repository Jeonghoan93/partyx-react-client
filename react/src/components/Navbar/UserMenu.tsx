import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import StyledAvatar from "../Avatar"; // I changed the import to StyledAvatar to avoid naming conflicts.
import StyledMenuItem from "./MenuItem";

const UserMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <UserMenuContainer>
      <UserMenuFlex>
        <AdvertiseButton onClick={() => {}}>
          Advertise your party
        </AdvertiseButton>
        <MenuButton onClick={handleShowMenu}>
          <AiOutlineMenu size={20} />
          <HiddenDiv>
            <StyledAvatar />
          </HiddenDiv>
        </MenuButton>
      </UserMenuFlex>

      {showMenu && (
        <MenuContent>
          <MenuList>
            <StyledMenuItem href="/register" label="Sign up" />
            <StyledMenuItem href="/login" label="Login" />
          </MenuList>
        </MenuContent>
      )}
    </UserMenuContainer>
  );
};

export default UserMenu;

import styled from "styled-components";

const UserMenuContainer = styled.div`
  position: relative;
`;

const UserMenuFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const AdvertiseButton = styled.div`
  display: none;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border-radius: 9999px;
  color: #eaeaea;

  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    color: #fff;
    font-weight: 900;
    transition: background-color 0.5s;
    background-color: hsla(0, 0%, 100%, 0.1);
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

const MenuButton = styled.div`
  padding: 1rem; // Equivalent to p-4
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: box-shadow 0.3s;
  color: #eaeaea;
  font-weight: 600;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: #fff;
    font-weight: 800;
  }

  @media (min-width: 768px) {
    padding: 0.25rem 0.5rem; // Equivalent to md:py-1 md:px-2
  }
`;

const HiddenDiv = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const MenuContent = styled.div`
  position: absolute;
  width: 40vw;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem; // Equivalent to rounded-xl
  background-color: white;
  overflow: hidden;
  right: 0;
  top: 3rem;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    width: 75%; // Equivalent to md:w-3/4
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
