import React from "react";
import { Nav } from "react-bootstrap";
const SignedOutLinks = () => {
  return (
    <Nav style={{ paddingLeft: "120px" }}>
      <Nav.Link href="#Log Out">Login</Nav.Link>
      <Nav.Link href="#Cart">Signup</Nav.Link>
    </Nav>
  );
};

export default SignedOutLinks;
