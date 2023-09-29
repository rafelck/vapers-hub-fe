import { Navbar, Form, Nav, NavDropdown, Container } from "react-bootstrap";
import Icon from "@mdi/react";
import {
  mdiAccountCircleOutline,
  mdiBellOutline,
  mdiCartOutline,
} from "@mdi/js";

export default function Header() {
  return (
    <>
      <Navbar bg="white" data-bs-theme="light" className="border" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home" className="fw-bold">
            vapershub
          </Navbar.Brand>
          <Nav>
            <NavDropdown
              title="Kategori"
              id="navbarScrollingDropdown"
              className="fw-bold">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form.Control
            type="text"
            id="search"
            aria-describedby="Search"
            placeholder="Search.."
          />

          <Nav className="me-auto">
            <Nav.Link href="#features">
              <Icon path={mdiBellOutline} size={1.3} />
            </Nav.Link>
            <Nav.Link href="#features">
              <Icon path={mdiCartOutline} size={1.3} />
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Icon path={mdiAccountCircleOutline} size={1.3} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
