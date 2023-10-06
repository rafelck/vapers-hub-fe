import {
  Row,
  Col,
  Container,
  Card,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import Logo from "../assets/logo.png";
import SideImage from "../assets/side_image.svg";
export default function RegisterAccount() {
  return (
    <div className="mt-3">
      <Container>
        <a href="/">
          <Image src={Logo} width={100} className="mx-auto d-block mb-2" />
        </a>

        <Row xs={1} md={2} lg={2} className="g-2">
          <Col>
            <Card className="mx-auto d-block shadow-sm border-0 mb-2">
              <Card.Body>
                <h4 className="text-center mt-3">Daftar Sekarang</h4>
                <p className="text-muted text-center mt-2">Sudah punya akun?</p>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1">
                  <Form.Label className="text-muted">
                    Nomor HP atau Email
                  </Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <div className="d-grid gap-1 mt-3">
                  <Button
                    variant="warning"
                    className="text-white"
                    size="sm"
                    disabled>
                    Daftar
                  </Button>
                </div>

                <p className="text-muted">
                  Dengan mendaftar, saya menyetujui
                  <a href="#" className="text-warning text-decoration-none">
                    {" "}
                    Syarat dan Ketentuan{" "}
                  </a>
                  serta{" "}
                  <a href="#" className="text-warning text-decoration-none">
                    Kebijakan Privasi
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <div className="mb-2">
              <Image
                src={SideImage}
                width={350}
                className="mx-auto d-block mb-5"
              />
              <h4 className="text-center mt-3">
                Mudah ngebul dengan VapersHub
              </h4>
              <p className="text-muted text-center mt-2">
                Gabung dan rasakan kemudahan bertransaksi di VapersHub
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
