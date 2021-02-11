import React from "react";
import { Button, Col, Image, Row, Container } from "react-bootstrap";

const CartItem = (props) => {
  const { quantity, add, sub, remove, product } = props;
  if (quantity === 0) {
    remove(product.id);
  }
  return (
    <Container className="my-4 pb-3 mr-3" fluid>
      <Row>
        <Col>
          <Image
            src={product.image}
            rounded
            className=" pr-2"
            style={{ height: "150px" }}
          />
        </Col>
        <Col className="pl-5">
          <Row className="my-2">
            <h6 className="grey">{product.title}</h6>
          </Row>
          <Row className="">
            <h6>{product.size}</h6>
          </Row>
          <Row className="mb-2">
            <h6>&#8377;{product.price}</h6>
          </Row>
          <Row>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={() => remove(product.id, product.quantity)}
            >
              Remove
            </Button>
          </Row>
        </Col>
        <Col className="pl-0 py-5">
          <Row>
            <div className="block-example border border-dark">
              <span
                className=" py-2 px-4 pb-2 disabled"
                onClick={() => sub(product.id, product.quantity, product.price)}
              >
                -
              </span>
              <span className="block-example border-right border-left border-dark px-4">
                {product.quantity}
              </span>
              <span
                className=" py-2 px-4 pb-2"
                onClick={() => add(product.id, product.quantity, product.price)}
              >
                +
              </span>
            </div>
          </Row>
        </Col>
        <Col className="text-center mt-5">
          <span>&#8377;{product.totalPrice}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItem;
