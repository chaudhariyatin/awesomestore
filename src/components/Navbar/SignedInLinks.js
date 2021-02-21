import React from "react";
import { Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authAction";

const SignedInLinks = (props) => {
  return (
    <Nav className="" style={{ paddingLeft: "120px" }}>
      <NavLink
        to="/mycart"
        activeClassName="selected"
        activeStyle={{
          color: "#D9D55B",
        }}
        style={{
          color: "#00000080",
          textDecoration: "none",
        }}
        className="pt-2"
      >
        Cart
      </NavLink>
      <NavLink
        to="/myorders"
        activeClassName="selected"
        activeStyle={{
          color: "#D9D55B",
        }}
        style={{
          color: "#00000080",
          textDecoration: "none",
        }}
        className="pt-2 px-3"
      >
        Orders
      </NavLink>
      <NavLink
        to="/"
        activeClassName="selected"
        style={{
          color: "#00000080",
          textDecoration: "none",
        }}
        className="px-3 pt-2"
        onClick={props.signOut}
      >
        Log Out
      </NavLink>
      <h1
        className="btn btn-floating border-rad  pink lighten-1"
        style={{ backgroundColor: "#D9D55B" }}
      >
        {props.profile.initials}
      </h1>
    </Nav>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
