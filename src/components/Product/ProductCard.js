import React from "react";
import { Card, Button } from "react-bootstrap";
const ProductCard = ({ product }) => {
  return (
    <Card
      style={{ width: "16rem", color: "#000000E6" }}
      className="md-4 mt-3 ml-3"
    >
      <Card.Img variant="top" src={product.image} style={{ height: "15rem" }} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          <span>&#8377;{product.price}</span>
          {"   "}
          <span style={{ textDecoration: "line-through", color: "#3DBE29" }}>
            &#8377;400
          </span>
        </Card.Text>

        {/* <Button variant="primary">Add to Cart</Button> */}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
