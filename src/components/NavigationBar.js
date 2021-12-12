import React from "react";
import { Nav } from "react-bootstrap";

const NavigationBar = (props) => {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Search Word</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">History</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Bookmarks</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavigationBar