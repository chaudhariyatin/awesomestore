import React from "react";
import {
  NavbarBrand,
  Navbar,
  Form,
  FormControl,
  Nav,
  Button,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const NavbarWrapper = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "white",
        border: "1px solid grey",
        // paddingLeft: "200px",
      }}
      className="ps-5"
    >
      <Navbar.Brand href="/" className="px-5">
        Awesome Store
      </Navbar.Brand>
      {/* <div className="mr-auto"></div> */}
      <Nav className="mr-auto">
        <NavLink
          to="/mensapperals"
          activeClassName="selected"
          activeClassName="selected"
          activeStyle={{
            color: "#D9D55B",
          }}
          style={{
            color: "#00000080",
            textDecoration: "none",
          }}
          className="px-5"
        >
          Men
        </NavLink>
        <NavLink
          to="/womensapperals"
          activeClassName="selected"
          activeStyle={{
            color: "#D9D55B",
          }}
          style={{
            color: "#00000080",
            textDecoration: "none",
          }}
        >
          Women
        </NavLink>
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="navbar-search"
        />
      </Form>
      <SignedInLinks />
      {/* <SignedOutLinks /> */}
    </Navbar>
  );
};

export default NavbarWrapper;
