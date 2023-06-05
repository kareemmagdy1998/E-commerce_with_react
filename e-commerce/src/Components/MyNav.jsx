import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";


export function MyNav() {

   const currentUser = useSelector(state => state.user)
  console.log(currentUser);
  return (
     <div>
      
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
<<<<<<< HEAD
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Products">Products</Nav.Link>
          {currentUser&&currentUser.role && <Nav.Link>Admin panel</Nav.Link>}
        </Nav>
        <Nav className="mx-5">
          {!currentUser&& <Nav.Link >Login</Nav.Link>}
          {currentUser&& <Nav.Link className="text-capitalize fs-5"> {currentUser.name} </Nav.Link>}
          {currentUser&& <Nav.Link className="fs-5"> <BsFillCartCheckFill /> </Nav.Link>}
          {currentUser&& <Nav.Link className="btn fs-5">Sign out</Nav.Link>}


=======
          <Nav.Link href="/card">Card</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
        </Nav>
        <Nav className="mx-5">
          <Nav.Link href="/adminpanel">adminpannel</Nav.Link>
>>>>>>> cardintegration
        </Nav>
      </Navbar>
    </div> 
    
  );
}
