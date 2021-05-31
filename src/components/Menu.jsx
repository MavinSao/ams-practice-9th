import React from "react";
import {Navbar,Form,Button,Nav,NavDropdown,FormControl, Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
function Menu() {
  return (
    <Navbar bg="light" expand="lg">
        <Container>
      <Navbar.Brand href="#home">AMS Management</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/post">Post</Nav.Link>
          <Nav.Link as={NavLink} to="/user">User</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
