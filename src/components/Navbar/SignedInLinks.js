import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <Nav className="" style={{ paddingLeft: "120px" }}>
      <NavLink
        to="/"
        activeClassName="selected"
        activeStyle={{
          color: "#D9D55B",
        }}
        style={{
          color: "#00000080",
          textDecoration: "none",
        }}
        className=" pt-2"
      >
        Log Out
      </NavLink>
      <NavLink
        to="/mycart"
        activeClassName="selected"
        activeClassName="selected"
        activeStyle={{
          color: "#D9D55B",
        }}
        style={{
          color: "#00000080",
          textDecoration: "none",
        }}
        className="px-3 pt-2"
      >
        Cart
      </NavLink>

      {/* <Nav.Link href="#Cart" className="roundedCircle">
        YC
      </Nav.Link> */}
      <h1
        className="btn btn-floating border-rad  pink lighten-1"
        style={{ backgroundColor: "pink" }}
      >
        YC
      </h1>
    </Nav>
  );
};

export default SignedInLinks;
