import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Button,
  Container,
  Row,
  Col,
  Card,
} from "react-bootstrap";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authAction";

const SignUp = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    props.signUp(user);
  };

  const { auth, authError } = props;
  if (auth.uid) return <Redirect to="/" />;

  return (
    <Container fluid>
      <Row className="justify-content-center my-4">
        <Col className="col-11 col-sm-12 col-md-5 col-lg-4 text-center p-0 mt-3 mb-2">
          <Card className="px-0 pt-4 pb-0 mt-3 mb-3 px-3 py-3">
            <h3 className="text-center">Sign Up</h3>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  value={user.firstName}
                  name="firstName"
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  value={user.lastName}
                  name="lastName"
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={user.email}
                  name="email"
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={user.password}
                  name="password"
                  onChange={handleChange}
                />
              </FormGroup>

              <div className="text-center">
                <Button variant="primary" type="submit" size="sm" block>
                  Submit
                </Button>
              </div>
            </Form>
            <Card.Text className="py-3" style={{ color: "#D82E2F" }}>
              {props.authError}
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
