import React from "react";
import { Button, Col, Image, Row, Container, Card } from "react-bootstrap";

const CartItem = (props) => {
  const { quantity, add, sub, remove, product } = props;
  if (quantity === 0) {
    remove(product.id);
  }
  return (
    <Card style={{ width: "50rem" }}>
      <Row className="px-2 py-2 text-muted " noGutters>
        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
          <Row>
            <Col xl={3} lg={3} md={3} sm={3} xs={3}>
              <Image src={product.image} rounded style={{ width: "8rem" }} />
            </Col>
            <Col xl={9} lg={9} md={9} sm={9} xs={9}>
              <Card.Title>{product.title}</Card.Title>
              <Row>
                <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                  <Card.Text>
                    Size: {product.size} <br />
                    Price: {product.price}
                  </Card.Text>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4} xs={4} className="">
                  <Card.Text>
                    <span className="">Select Quantity</span> <br />
                    <span
                      onClick={() =>
                        sub(product.id, product.quantity, product.price)
                      }
                      className="border px-3"
                    >
                      -
                    </span>
                    <span className="border px-3">{product.quantity}</span>
                    <span
                      onClick={() =>
                        add(product.id, product.quantity, product.price)
                      }
                      className="border px-3"
                    >
                      +
                    </span>
                  </Card.Text>
                </Col>
                <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                  <Card.Text className="font-weight-bold">
                    Total: &#8377;{product.totalPrice}
                  </Card.Text>
                </Col>
                <Col>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="mt-2"
                    onClick={() => remove(product.id, product.quantity)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default CartItem;
