import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./TopBar.css";
function TopBar() {
  return (
    <div className="container">
      <Nav.Item>
        <Link to='/all' className="navLink">ALL</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/fsd' className="navLink">FULL STACK DEVOLOPMENT</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/datasc' className="navLink">DATA SCIENCE</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/cyber' className="navLink">CYBER SECURITY</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to='/career' className="navLink">CAREER</Link>
      </Nav.Item>
  
     </div>
  );
}

export default TopBar;
