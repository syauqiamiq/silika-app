import React from "react";
import FooterComponent from "../components/Footer/FooterComponent";
import NavbarComponent from "../components/Navbar/NavbarComponent";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarComponent />
      {children}
      <FooterComponent />
    </>
  );
};

export default Layout;
