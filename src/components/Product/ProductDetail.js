import React, { useEffect, useState } from "react";

import {
  Col,
  Container,
  Image,
  Row,
  Button,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { connect } from "react-redux";
import {
  addTocart,
  getProduct,
  removeProduct,
} from "../../store/actions/productActions";
import SpinnerWrapper from "../UI/SpinnerWrapper";

const ProductDetail = (props) => {
  const productId = props.match.params.id;
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("S");

  const radios = [
    { name: "S", value: "S" },
    { name: "M", value: "M" },
    { name: "L", value: "L" },
    { name: "XL", value: "XL" },
  ];

  const { product } = props;
  useEffect(() => {
    props.getProduct(productId);
  }, []);
  console.log(productId);
  // let productDetails = props.products.find((product) => {
  //   return product.id === productId;
  // });

  const addProductHandler = () => {
    props.addToCart({
      productId: productId,
      image: product.image,
      title: product.title,
      price: product.price,
      size: radioValue,
      quantity: 1,
      totalPrice: product.price,
    });
  };

  if (!product) {
    return <SpinnerWrapper />;
  }

  return (
    <Container className="my-4">
      <Row>
        <Col xs={12} md={6}>
          <Image
            src={product.image}
            rounded
            className="lg-5 md-3"
            style={{ height: "500px" }}
          />
        </Col>
        <Col xs={12} md={6} className="m">
          <Row className="my-2">
            <h6 className="grey">{product.title}</h6>
          </Row>
          <Row className="my-2">
            <h1>&#8377;{product.price}</h1>
          </Row>
          <span style={{ textDecoration: "line-through", color: "#3DBE29" }}>
            &#8377;200
          </span>
          <Row className="my-2">
            <div>
              Select Size <br />
              <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                    className="mr-2 my-3"
                    style={{ width: "70px" }}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </div>
          </Row>
          <Row>
            <Button onClick={addProductHandler}>Add To Cart</Button>
          </Row>
          <Row className="mt-5">
            <h6>Product Description</h6>
            <p>{product.description}</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (id) => {
      dispatch(getProduct(id));
    },
    addToCart: (cartItem) => {
      dispatch(addTocart(cartItem));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    product: state.products.product,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
