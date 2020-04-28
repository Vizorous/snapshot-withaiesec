import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const BigButton = styled(Button).attrs((props) => ({
  size: "lg",
  block: true,
}))`
  height: 20vh;
  font-size: 2rem;
`;
export default function Home() {
  let history = useHistory();
  const pushHistory = (url) => () => {
    history.push(url);
  };
  return (
    <Container>
      <Row>
        <Col>
          <BigButton onClick={pushHistory("/experience")}>Experience</BigButton>
        </Col>
        <Col>
          <BigButton onClick={pushHistory("/moment")}>Moment</BigButton>
        </Col>
      </Row>
    </Container>
  );
}
