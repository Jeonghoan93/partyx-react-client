import { useMemo } from "react";
import { BsBuildingCheck } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GiPartyFlags } from "react-icons/gi";
import { RiBuilding3Fill } from "react-icons/ri";
import { Icon, List, ListItem, Menu, Span } from "./styles";

export type MenuItem = {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
};

type Props = {
  items?: MenuItem[];
};

const NavbarProductMenu = ({ items: externalItems }: Props) => {
  const defaultItems = useMemo(
    () => [
      { title: "House party", icon: <FaHome fontSize={21} />, isActive: false },
      { title: "Festival", icon: <GiPartyFlags fontSize={21} /> },
      { title: "Rave", icon: <RiBuilding3Fill fontSize={21} /> },
      { title: "Club event", icon: <BsBuildingCheck fontSize={21} /> },
    ],
    []
  );

  const items = externalItems || defaultItems;

  return (
    <Menu>
      <List>
        {items.map((item) => (
          <ListItem key={item.title} isActive={item.isActive || false}>
            <Icon>{item.icon}</Icon>
            <Span>{item.title}</Span>
          </ListItem>
        ))}
      </List>
    </Menu>
  );
};

export default NavbarProductMenu;
