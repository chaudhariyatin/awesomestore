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
} from "../../store/actions/productActions";
import firebase from "../../config/fbConfig";
import { getFirestore } from "redux-firestore";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const { cartItems } = props;
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

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

  useEffect(() => {
    const firestore = getFirestore();
    firestore
      .collection("cart")
      .onSnapshot((onSnapshot) =>
        console.log(onSnapshot.docs.map((doc) => doc.data()))
      );
  }, [quantity]);

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

  if (!isLoaded(cartItems)) {
    return <SpinnerWrapper />;
  }
  let displayState = (
    <>
      <span className="mr-auto">Sub Total: &#8377;{purchaseAmount}</span>
      <Button>Go To Checkout</Button>
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
    <Container>
      <Row xs={12} md={12} lg={7} xl={7}>
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
      <Row
        xs={12}
        md={12}
        lg={12}
        xl={12}
        className=" align-items-center mx-auto mb-5"
      >
        {displayState}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.firestore.ordered.cart,
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
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "cart",
    },
  ])
)(Cart);
