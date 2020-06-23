import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReposList from "./ReposList";

export default class Maker extends Component {

  render() {
    return (
      <Container>
        <h3> Repositories </h3>
        <Row>
          <Col>
            <ReposList />
          </Col>
        </Row>
      </Container>
    );
  }
}