import React from "react";
import { Nav } from "react-bootstrap";

const SignedInLinks = () => {
  return (
    <Nav className="" style={{ paddingLeft: "120px" }}>
      <Nav.Link href="#Log Out">Log Out</Nav.Link>
      <Nav.Link href="#Cart">Cart</Nav.Link>
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
