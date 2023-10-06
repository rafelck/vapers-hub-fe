import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Button,
  Row,
  Col,
  Image,
  Modal,
  Form,
} from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiBellOutline, mdiCartOutline, mdiMagnify } from "@mdi/js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../assets/avatar.png";
import Logo from "../assets/logo.png";

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

function LogInMenu() {
  return (
    <>
      <Nav>
        <Nav.Link href="#">
          <Icon path={mdiBellOutline} size={1} />
        </Nav.Link>
        <Nav.Link href="#">
          <Icon path={mdiCartOutline} size={1} />
        </Nav.Link>
        <Nav.Link href="#">
          <Image
            src={Avatar}
            width={30}
            style={{ marginTop: "-3px" }}
            roundedCircle
          />
        </Nav.Link>
      </Nav>
    </>
  );
}

function LogOutMenu() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav>
        <Row xs={2} md={2} lg={2} className="g-2">
          <Col>
            <Button
              className="btn-sm mr-3"
              variant="outline-warning"
              onClick={handleShow}>
              Masuk
            </Button>
          </Col>
          <Col>
            <Button
              className="btn-sm mr-3 text-white"
              variant="warning"
              onClick={() => {
                navigate("/register");
              }}>
              Daftar
            </Button>
          </Col>
        </Row>
      </Nav>

      <Modal show={show} onHide={handleClose} size="sm" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-between mb-3">
            <h4>Masuk</h4>
            <span
              role="button"
              onClick={() => {
                navigate("/register");
              }}
              className="link-warning text-decoration-none pe-auto">
              Daftar
            </span>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="text-muted">Nomor HP atau Email</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <span className="text-end">
            <a href="#" className="link-warning text-decoration-none">
              Butuh bantuan?
            </a>
          </span>

          <div className="d-grid gap-1 mt-3">
            <Button
              variant="warning"
              className="text-white"
              size="sm"
              onClick={handleClose}
              disabled>
              Selanjutnya
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <Navbar
        bg="light"
        data-bs-theme="light"
        className="shadow"
        sticky="top"
        expand="lg"
        style={{ padding: "15px" }}>
        <Container>
          <Navbar.Brand href="/" className="fw-bold">
            <Image src={Logo} width={60} style={{ marginTop: "-3px" }} />
          </Navbar.Brand>

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

              <Nav.Link href="#">
                <Icon path={mdiMagnify} size={1} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {loggedIn ? <LogInMenu /> : <LogOutMenu />}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </>
  );
}
