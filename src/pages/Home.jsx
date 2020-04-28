import React, { useContext } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ControlContext } from "../App";

const BigButton = styled(Button).attrs((props) => ({
  size: "lg",
  block: true,
}))`
  height: 20vh;
  font-size: 2rem;
`;
export default function Home() {
  const { handleChange } = useContext(ControlContext);
  let history = useHistory();
  const pushHistory = (url) => () => {
    // console.log(history);

    history.push(`/${url}`);
    handleChange("campaign")(url);
  };
  return (
    <Container>
      <Row>
        <Col>
          <BigButton onClick={pushHistory("experience")}>Experience</BigButton>
        </Col>
        <Col>
          <BigButton onClick={pushHistory("moment")}>Moment</BigButton>
        </Col>
      </Row>
    </Container>
  );
}
