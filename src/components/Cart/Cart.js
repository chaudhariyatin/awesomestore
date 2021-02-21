import React, { useEffect, useState } from "react";
import { Col, Button, Container, Row, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import CartItem from "./CartItem";
import SpinnerWrapper from "../UI/SpinnerWrapper";
import {
  removeProduct,
  addProductQuantity,
  subProductQuantity,
  addingStagedCart,
} from "../../store/actions/productActions";
import firebase from "../../config/fbConfig";
import { getFirestore } from "redux-firestore";
import { Link, Redirect, useHistory } from "react-router-dom";

const Cart = (props) => {
  const { cartItems } = props;
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();

  const removeProductHandler = (id) => {
    props.removeProductFromCart(id);
  };

  const addQuantity = (id, num, price) => {
    props.addProductQuantity(id, num, price);
  };

  const SubQuantity = (id, num, price) => {
    if (num >= 0) {
      props.subProductQuantity(id, num, price);
    }
  };

  const checkoutCartHandler = () => {
    props.addToStagging(cartItems);
    history.push("/checkout");
  };
  const { userId } = props;

  let purchaseAmount = 0;
  let totalAmount = 0;
  if (isLoaded(cartItems)) {
    cartItems.map((cartItem) => {
      let productPrice = cartItem.price * cartItem.quantity;
      purchaseAmount += productPrice;
      totalAmount = purchaseAmount + 50;
      if (cartItem.quantity === 0) {
        removeProductHandler(cartItem.id);
      }
    });
  }

  const { auth, authError } = props;
  if (!props.userId) {
    history.push("/");
  }
  if (!isLoaded(props.userId)) {
    return <SpinnerWrapper />;
  }
  if (!isLoaded(cartItems)) {
    return <SpinnerWrapper />;
  }
  let displayState = (
    <>
      <span className="mr-auto text-muted font-weight-bold">
        Sub Total: &#8377;{purchaseAmount}
      </span>
      <Button
        variant="outline-primary"
        size="sm"
        className=""
        onClick={checkoutCartHandler}
      >
        Go To Checkout
      </Button>
    </>
  );
  if (cartItems.length === 0) {
    displayState = (
      <Link
        to="/"
        className="mx-auto  text-center"
        style={{
          textDecoration: "none",
          color: "#00000080",
          marginTop: "10rem",
        }}
      >
        <Card>
          <Card.Title>Cart is currently empty!</Card.Title>
          <Card.Text>Click here..</Card.Text>
        </Card>
      </Link>
    );
  }

  return (
    <Container style={{ width: "50rem" }}>
      <h3 className="text-center text-muted my-2">Your Cart</h3>
      <Row className="justify-content-center">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            product={item}
            quantity={quantity}
            add={addQuantity}
            sub={SubQuantity}
            remove={removeProductHandler}
          />
        ))}
      </Row>
      <Row xl={12} lg={12} md={12} sm={12} xs={12} className="my-4">
        {displayState}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.firestore.ordered.myCart,
    userId: state.firebase.auth.uid,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProductFromCart: (cartId) => {
      dispatch(removeProduct(cartId));
    },
    addProductQuantity: (id, num, price) => {
      dispatch(addProductQuantity(id, num, price));
    },
    subProductQuantity: (id, num, price) => {
      dispatch(subProductQuantity(id, num, price));
    },
    addToStagging: (cartItems) => {
      dispatch(addingStagedCart(cartItems));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "cart",
      where: [["userId", "==", ownProps.userId]],
      storeAs: "myCart",
    },
  ])
)(Cart);
