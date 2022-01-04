import React from "react";
import FooterComponent from "../components/Footer/FooterComponent";
import NavbarComponent from "../components/Landing/NavbarComponent";

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
