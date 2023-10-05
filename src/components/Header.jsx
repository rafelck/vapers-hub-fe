import { Navbar, Form, Nav, NavDropdown, Container } from "react-bootstrap";
import Icon from "@mdi/react";
import {
  mdiAccountCircleOutline,
  mdiBellOutline,
  mdiCartOutline,
} from "@mdi/js";

const categories = [
  {
    id: 1,
    slug: "mod",
    name: "Mod",
  },
  {
    id: 2,
    slug: "liquid",
    name: "Liquid",
  },
  {
    id: 3,
    slug: "tools",
    name: "Tools",
  },
];

export default function Header() {
  return (
    <>
      <Navbar
        bg="white"
        data-bs-theme="light"
        className="shadow-sm"
        sticky="top"
        expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className="fw-bold">
            vapershub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="Kategori"
                id="navbarScrollingDropdown"
                className="fw-bold">
                {categories.map((data, i) => (
                  <NavDropdown.Item key={i} href="#action3">
                    {data.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <Form.Control
            type="text"
            id="search"
            aria-describedby="Search"
            placeholder="Search.."
          />

          <Nav>
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
