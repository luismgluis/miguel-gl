import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const TopNavBar: React.FC<any> = (props) => {
  return (
    <div style={{ position: "fixed", zIndex: 99, width: "100%" }}>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">LMGL - Frontend Dev.</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default TopNavBar;
