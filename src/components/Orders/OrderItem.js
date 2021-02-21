import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import OrderedProduct from "./OrderedProduct";
import moment from "moment";
import { Link } from "react-router-dom";

const OrderItem = ({ order }) => {
  let purchaseAmount = 0;
  let totalAmount = 0;
  order.cartItems.map((cartItem) => {
    let productPrice = cartItem.price * cartItem.quantity;
    purchaseAmount += productPrice;
  });

  return (
    <Card style={{ width: "50rem" }} className="my-2">
      <Card.Header className="text-muted">
        Transaction ID: {order.id}
        <span className="pl-5 ml-5">
          Date: {moment(order.createdAt.toDate()).format("ll")}
        </span>
      </Card.Header>
      <Card>
        <Row className="px-4 py-2" noGutters>
          <Col lg={4} md={4} sm={4} xs={4}>
            <Card.Title className="text-muted block">Payment</Card.Title>
            <Card.Text className="text-muted">
              Subtotal:&#8377;{purchaseAmount} <br />
              Shipping fee: &#8377;50 <br />
              <span className="font-weight-bold">
                Total: &#8377;{purchaseAmount + 50}
              </span>
            </Card.Text>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <Card.Title className=" text-muted">Contact</Card.Title>
            <Card.Text className="text-muted">
              {order.contactDetails.firstName} {order.contactDetails.lastName}
              <br />
              {order.contactDetails.phoneNumber}
              <br />
              {order.contactDetails.email}
            </Card.Text>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4}>
            <Card.Title className=" text-muted">Shipping address</Card.Title>
            <Card.Text className="text-muted">
              {order.contactDetails.address} <br />
              Pin Code: {order.contactDetails.pinCode}
              <br />
            </Card.Text>
          </Col>
        </Row>
      </Card>
      {/* details of products */}
      {order.cartItems.map((item) => (
        <OrderedProduct product={item} />
      ))}
    </Card>
  );
};

export default OrderItem;
