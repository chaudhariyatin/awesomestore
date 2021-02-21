import React from "react";
import { Container, Row, Card } from "react-bootstrap";
import OrderItem from "./OrderItem";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import SpinnerWrapper from "../UI/SpinnerWrapper";
import { Link, Redirect, useHistory } from "react-router-dom";

const Orders = (props) => {
  const { orders, userId } = props;
  const history = useHistory();
  if (!isLoaded(orders)) {
    return <SpinnerWrapper />;
  }

  let displayState = null;
  if (orders.length === 0) {
    displayState = (
      <Link
        to="/mycart"
        className="mx-auto  text-center"
        style={{
          textDecoration: "none",
          color: "#00000080",
          marginTop: "10rem",
        }}
      >
        <Card>
          <Card.Title>No orders!</Card.Title>
          <Card.Text>Click here..</Card.Text>
        </Card>
      </Link>
    );
  }

  if (!props.userId) {
    history.push("/");
  }

  return (
    <Container fluid>
      <h3 className="text-center text-muted my-2">Your Orders</h3>
      <Row className="my-3 justify-content-center" lg={10}>
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.firestore.ordered.myOrders,
    userId: state.firebase.auth.uid,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "orders",
      where: [["userId", "==", ownProps.userId]],
      storeAs: "myOrders",
    },
  ])
)(Orders);
