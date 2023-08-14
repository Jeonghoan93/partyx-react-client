import { useContext, useRef, useState } from "react";
import { MdLogout } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { GlobalFonts } from "src/BaseStyles";
import { AuthContext } from "../../contexts/AuthContext";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import UserMenu from "./UserMenu";
import {
  Avatar,
  AvatarImage,
  AvatarMenu,
  AvatarMenuItem,
  AvatarText,
  Brand,
  Left,
  Right,
  StyledNavbar,
} from "./styles";

type Props = {};

const Navbar = (props: Props) => {
  const [isShowAvatarMenu, setShowAvatarMenu] = useState(false);
  const refAvatarMenu = useRef(null);
  const refAvatarImg = useRef(null);
  const { state: auth } = useContext(AuthContext);

  useOnClickOutside([refAvatarMenu, refAvatarImg], () =>
    setShowAvatarMenu(false)
  );

  return (
    <StyledNavbar>
      <GlobalFonts />
      <Left>
        <Link to="/">
          <Brand to="/">
            PARTY<span className="redX">X</span>
          </Brand>
        </Link>
      </Left>
      <Right>
        {auth.isAuthenticated ? (
          <Avatar>
            <AvatarText>{auth.user?.email}</AvatarText>
            <AvatarImage
              src={auth.user?.avatar}
              ref={refAvatarImg}
              onClick={() => setShowAvatarMenu((prev) => !prev)}
            />
            {isShowAvatarMenu && (
              <AvatarMenu ref={refAvatarMenu}>
                <Link to="/bookings">
                  <AvatarMenuItem>
                    <RiHotelLine fontSize={20} /> Bookings
                  </AvatarMenuItem>
                </Link>
                <Link to="/logout">
                  <AvatarMenuItem>
                    <MdLogout fontSize={20} /> Logout
                  </AvatarMenuItem>
                </Link>
              </AvatarMenu>
            )}
          </Avatar>
        ) : (
          <>
            <UserMenu />
          </>
        )}
      </Right>
    </StyledNavbar>
  );
};

export default Navbar;
