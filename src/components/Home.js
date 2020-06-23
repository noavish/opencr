import React, { useContext } from "react";
import { Redirect, BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { AuthContext } from "../App";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Home() {
  const { state, dispatch } = useContext(AuthContext);

  if (!state.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
        <Row>
            <Col className="text-center">
                <Link to="/maker">
                    <Button className="home-btn">MAKER</Button>
                </Link>
                <Link to="/mentor">
                    <Button className="home-btn">MENTOR</Button>
                </Link>
            </Col>
        </Row>
    </Container>
  );
}
