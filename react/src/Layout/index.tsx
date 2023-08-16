import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderHero from "../components/HeaderHero";
import HeaderSearch from "../components/HeaderSearch";
import Navbar from "../components/Navbar";
import NavbarProductMenu from "../components/NavbarProductMenu";
import NewsLetter from "../components/NewsLetter";
import { Header, HeaderInside, Main } from "./styles";

type Props = {};

const Layout = (props: Props) => {
  const location = useLocation();

  return (
    <>
      <Header isHomePage={location.pathname === "/"}>
        <HeaderInside>
          <Navbar />
          <NavbarProductMenu />
          {location.pathname === "/" && (
            <>
              <HeaderHero />
            </>
          )}
          <HeaderSearch />
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
