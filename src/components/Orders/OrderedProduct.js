import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const OrderedProduct = (props) => {
  const { product } = props;

  return (
    <Card>
      <Row className="px-4 py-3 text-muted my-2" noGutters>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Row>
            <Col lg={3} md={3} sm={3} xs={3}>
              <Image src={product.image} rounded style={{ width: "8rem" }} />
            </Col>
            <Col lg={9} md={9} sm={9} xs={9}>
              <Card.Title>{product.title}</Card.Title>
              <Row>
                <Col lg={3} md={3} sm={3} xs={3}>
                  <Card.Text>Size: {product.size}</Card.Text>
                </Col>
                <Col lg={3} md={3} sm={3} xs={3}>
                  <Card.Text>Quantity: {product.quantity}</Card.Text>
                </Col>
                <Col lg={3} md={3} sm={3} xs={3}>
                  <Card.Text className="font-weight-bold">
                    Total: &#8377;{product.totalPrice}
                  </Card.Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default OrderedProduct;
