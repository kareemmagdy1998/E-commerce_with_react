import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export function MyNav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/card">Card</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
        </Nav>
        <Nav className="mx-5">
          <Nav.Link href="/adminpanel">adminpannel</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
