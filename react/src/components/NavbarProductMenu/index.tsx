import { useMemo, useRef, useState } from "react";
import { BsBuildingCheck } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GiPartyFlags } from "react-icons/gi";
import { RiBuilding3Fill } from "react-icons/ri";
import useOnClickOutside from "src/hooks/useOnClickOutside";
import { Icon, List, ListItem, Menu, Span, Tooltip } from "./styles";

export type MenuItem = {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
};

type Props = {
  items?: MenuItem[];
};

const NavbarProductMenu = ({ items: externalItems }: Props) => {
  const [visibleTooltip, setVisibleTooltip] = useState<string | null>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useOnClickOutside([tooltipRef, iconRef], () => setVisibleTooltip(null));

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

  const handleItemClick = (itemTitle: string) => {
    console.log("Navigating to", itemTitle);
  };

  const handleIconClick = (itemTitle: string) => {
    if (visibleTooltip === itemTitle) {
      setVisibleTooltip(null);
    } else {
      setVisibleTooltip(itemTitle);
    }
  };

  return (
    <Menu>
      <List>
        {items.map((item) => (
          <ListItem
            key={item.title}
            isActive={item.isActive || false}
            onClick={() => handleItemClick(item.title)}
          >
            {visibleTooltip === item.title && (
              <Tooltip ref={tooltipRef}>{item.title}</Tooltip>
            )}
            <Icon ref={iconRef} onClick={() => handleIconClick(item.title)}>
              {item.icon}
            </Icon>
            <Span>{item.title}</Span>
          </ListItem>
        ))}
      </List>
    </Menu>
  );
};

export default NavbarProductMenu;
