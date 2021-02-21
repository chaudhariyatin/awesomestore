import React, { useEffect } from "react";
import { Badge, Container, Row, Toast } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../Product/ProductCard";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { compose } from "redux";
import SpinnerWrapper from "../UI/SpinnerWrapper";
import { setErr } from "../../store/actions/ordersActions";
import Notification from "../notification/Notification";
const Home = (props) => {
  const { message } = props;
  useEffect(() => {
    props.setErr();
  }, []);

  if (!isLoaded(props.products)) {
    return <SpinnerWrapper />;
  }
  console.log(message);
  let notification = null;
  if (message) {
    notification = <Notification message={props.message} />;
  }
  return (
    <React.Fragment>
      {notification}
      <Container>
        <h6 className="text-muted ml-5 my-3">Home/All T-shirts</h6>
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
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.firestore.ordered.products,
    message: state.products.mes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setErr: () => dispatch(setErr()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
