import React from "react";
import { Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../Product/ProductCard";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { compose } from "redux";
import SpinnerWrapper from "../UI/SpinnerWrapper";

const Home = (props) => {
  // const mensClothing = products.filter((p) => p.category === 2);
  // const womensClothing = products.filter((p) => p.category !== 1);

  if (!isLoaded(props.products)) {
    return <SpinnerWrapper />;
  }
  return (
    <Container>
      <Row className="justify-content-md-center sm-center">
        {props.products.map((product) => (
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
  // console.log(state.firestore.ordered);
  return {
    products: state.firestore.ordered.products,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "products",
    },
  ])
)(Home);
