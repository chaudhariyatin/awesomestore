import React, { useState } from "react";
import { Row, Col, Toast, Nav, Container } from "react-bootstrap";

const Notification = ({ message }) => {
  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(!show);

  let displayNotification = null;

  if (show) {
    displayNotification = (
      <Container
        fluid
        style={{ backgroundColor: "#D9D55B", textAlign: "center" }}
        className="text-center"
      >
        <span>{message}</span>
        <span
          className=""
          style={{
            position: "absolute",
            top: "4rem",
            right: "1rem",
          }}
          onClick={toggleShow}
        >
          &times;
        </span>
      </Container>
    );
  }
  return <React.Fragment>{displayNotification}</React.Fragment>;
};

export default Notification;
