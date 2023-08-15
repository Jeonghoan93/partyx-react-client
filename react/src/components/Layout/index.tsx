import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer";
import HeaderHero from "../HeaderHero";
import HeaderSearch from "../HeaderSearch";
import Navbar from "../Navbar";
import NavbarProductMenu from "../NavbarProductMenu";
import NewsLetter from "../NewsLetter";
import { Header, HeaderInside, Main } from "./styles";

type Props = {};

const Layout = (props: Props) => {
  const location = useLocation();

  return (
    <>
      <Header>
        <HeaderInside>
          <Navbar />
          <NavbarProductMenu />
          {location.pathname === "/" && (
            <>
              <HeaderHero />
              <HeaderSearch />
            </>
          )}
        </HeaderInside>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Layout;
