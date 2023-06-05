import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { BsFillCartCheckFill } from "react-icons/bs";
import { log_out } from "../actions";
import { useNavigate } from "react-router-dom";


export function MyNav() {
let dispatch = useDispatch()
let navigate = useNavigate()
  //  const currentUser = useSelector(state => state.user)
  const currentUser = JSON.parse(localStorage.getItem("token"));
  console.log(currentUser);
  let logout = () =>{
    dispatch(log_out());
    localStorage.removeItem("token");
    navigate("/");
  } 
  return (
     <div>  
      
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          {currentUser&&currentUser.role && <Nav.Link href="adminpanel">Admin panel</Nav.Link>}
        </Nav>
        <Nav className="mx-5">
          {!currentUser&& <Nav.Link  href="/login">Login</Nav.Link>}
          {currentUser&& <Nav.Link className="text-capitalize fs-5"> {currentUser.name} </Nav.Link>}
          {currentUser&& <Nav.Link className="fs-5" href="/card"> <BsFillCartCheckFill /> </Nav.Link>}
          {currentUser&& <Nav.Link className="btn fs-5" onClick={logout}>Sign out</Nav.Link>}


        </Nav>
      </Navbar>
    </div> 
    
  );
}
