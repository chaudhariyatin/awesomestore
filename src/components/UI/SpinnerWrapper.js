import React from "react";
import { Col, Container, Button, Spinner } from "react-bootstrap";

const SpinnerWrapper = () => {
  return (
    <Container>
      <Col
        className="d-flex  justify-content-center"
        style={{ padding: "250px" }}
      >
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="lg"
            role="status"
            aria-hidden="true"
            className=""
          />
          <span className="sr-only">Loading...</span>
        </Button>
      </Col>
    </Container>
  );
};

export default SpinnerWrapper;
