import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default class NavBar extends Component {

  handleLogout = () => {
    this.props.handleLogout();
  } 

  render() {
    return (
      <Navbar bg="dark" expand="lg" fixed="top">
        <Button onClick={()=> this.handleLogout()}>Logout</Button>
      </Navbar>
    );
  }
}