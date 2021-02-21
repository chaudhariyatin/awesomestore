import React from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../Product/ProductCard";
import { isLoaded } from "react-redux-firebase";
import SpinnerWrapper from "../UI/SpinnerWrapper";

const WomensProducts = (props) => {
  const { products } = props;
  if (!isLoaded(props.products)) {
    return <SpinnerWrapper />;
  }
  let womensClothing = [];
  if (products) {
    womensClothing = products.filter((p) => p.men === false);
  }

  return (
    <Container>
      <h6 className="text-muted ml-5 my-3">Home/Women T-shirts</h6>
      <Row className="justify-content-md-center sm-center">
        {womensClothing.map((product) => (
          <Link
            to={"/productdetail/" + product.id}
            key={product.id}
            style={{ textDecoration: "none" }}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
  };
};

export default connect(mapStateToProps)(WomensProducts);
