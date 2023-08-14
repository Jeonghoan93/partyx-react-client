import { useMemo } from "react";
import { BsBuildingCheck } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GiPartyFlags } from "react-icons/gi";
import { RiBuilding3Fill } from "react-icons/ri";
import { List, ListItem, Menu, Span } from "./styles";

type Props = {};

const NavbarProductMenu = (props: Props) => {
  const items = useMemo(
    () => [
      { title: "House party", icon: <FaHome fontSize={21} />, isActive: false },
      { title: "Festival", icon: <GiPartyFlags fontSize={21} /> },
      { title: "Rave", icon: <RiBuilding3Fill fontSize={21} /> },
      { title: "Club event", icon: <BsBuildingCheck fontSize={21} /> },
    ],
    []
  );

  return (
    <Menu>
      <List>
        {items.map((item, index) => (
          <ListItem key={index} isActive={item.isActive || false}>
            {item.icon}
            <Span>{item.title}</Span>
          </ListItem>
        ))}
      </List>
    </Menu>
  );
};

export default NavbarProductMenu;
