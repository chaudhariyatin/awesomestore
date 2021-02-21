import React from "react";
import {
  NavbarBrand,
  Navbar,
  Form,
  FormControl,
  Nav,
  Button,
} from "react-bootstrap";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { compose } from "redux";
import SearchForm from "./SearchForm";

const NavbarWrapper = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <Navbar
      style={{
        backgroundColor: "white",
        border: "1px solid grey",
      }}
      className="ps-5"
    >
      <Navbar.Brand href="/" className="px-5">
        Awesome Store
      </Navbar.Brand>
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
      <SearchForm />
      {links}
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "products",
    },
  ])
)(NavbarWrapper);
