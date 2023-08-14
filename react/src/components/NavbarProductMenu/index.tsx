import { useMemo } from "react";
import { AiFillCar } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { MdAttractions, MdFlight, MdLocalTaxi } from "react-icons/md";
import { List, ListItem, Menu, Span } from "./styles";

type Props = {};

const NavbarProductMenu = (props: Props) => {
  const items = useMemo(
    () => [
      { title: "House party", icon: <FaHome fontSize={21} />, isActive: false },
      { title: "Flights", icon: <MdFlight fontSize={21} /> },
      { title: "Car rentals", icon: <AiFillCar fontSize={21} /> },
      { title: "Attractions", icon: <MdAttractions fontSize={21} /> },
      { title: "Airport taxis", icon: <MdLocalTaxi fontSize={21} /> },
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
