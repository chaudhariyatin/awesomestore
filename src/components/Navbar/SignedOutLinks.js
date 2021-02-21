import React from "react";
import { Nav } from "react-bootstrap";
const SignedOutLinks = () => {
  return (
    <Nav style={{ paddingLeft: "120px" }}>
      <Nav.Link href="/signin">Login</Nav.Link>
      <Nav.Link href="/signup">Signup</Nav.Link>
    </Nav>
  );
};

export default SignedOutLinks;
