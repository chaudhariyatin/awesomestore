import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Button,
  Card,
  Container,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { placeOrder } from "../../store/actions/ordersActions";
import { removeProduct } from "../../store/actions/productActions";
import SpinnerWrapper from "../UI/SpinnerWrapper";

const Checkout = (props) => {
  const { cartItems } = props;
  const history = useHistory();
  const [contactDetails, setContactDetails] = useState({
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    address: "",
    pinCode: "",
  });
  const [loadingState, setLoadingState] = useState("Place Order");

  const handleChange = (e) => {
    e.preventDefault();
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrderHandler = (e) => {
    e.preventDefault();
    props.placeOrder(cartItems, contactDetails);
    setLoadingState(
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    );
    cartItems.forEach((item) => {
      return props.removeProductFromCart(item.id);
    });
  };

  if (cartItems.length === 0) {
    history.push("/");
  }

  if (props.err === false) {
    history.push("/");
  }

  return (
    <Container fluid>
      <Row className="justify-content-center mt-5">
        <Col lg={3} className="text-center">
          <Card className="px-2 py-1 mt-5">
            <Card.Title className="py-3 mb-2 ">Contact Details</Card.Title>
            <Form onSubmit={placeOrderHandler}>
              <FormGroup className="mb-1">
                <Form.Control
                  type="text"
                  placeholder="First name"
                  value={contactDetails.firstName}
                  name="firstName"
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup className="mb-1">
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  value={contactDetails.lastName}
                  name="lastName"
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup className="mb-1">
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={contactDetails.email}
                  name="email"
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup className="mb-1">
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  value={contactDetails.password}
                  name="phoneNumber"
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup className="mb-1">
                <Form.Control
                  type="text"
                  placeholder="Address"
                  value={contactDetails.password}
                  name="address"
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup className="mb-1">
                <Form.Control
                  type="text"
                  placeholder="Pin code"
                  value={contactDetails.password}
                  name="pinCode"
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <Button
                variant="primary"
                type="submit"
                size="sm"
                className="px-5"
              >
                {loadingState}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    cartItems: state.products.cart,
    err: state.products.err,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    placeOrder: (cartItem, contactDetails) =>
      dispatch(placeOrder(cartItem, contactDetails)),
    removeProductFromCart: (id) => dispatch(removeProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
