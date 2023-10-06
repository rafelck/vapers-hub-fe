import { Container, Card, Row, Col } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";

const productsDefaults = [];

function handleClick() {
  alert("test");
}

function HeaderList({ produkName }) {
  return (
    <>
      <Row>
        <Col className="mb-3">
          <h4 className="fw-bold text-dark">{produkName}</h4>
        </Col>
        <Col className="mb-3">
          <a
            href="/products"
            className="text-decoration-none float-end text-end link-warning">
            Lihat Semua
          </a>
        </Col>
      </Row>
    </>
  );
}

export default function Products({
  produkName = "test",
  products = productsDefaults,
}) {
  return (
    <div className="mb-3">
      <HeaderList produkName={produkName} />

      <Row xs={2} md={4} lg={4} className="g-3">
        {products.map((data, i) => (
          <Col key={i}>
            <Card className="shadow products border-0" onClick={handleClick}>
              <Card.Img
                className="products-card"
                variant="top"
                src={data.images}
              />
              <Card.Body>
                <Card.Title className="text-muted">{data.name}</Card.Title>
                <Card.Text>
                  <b
                    className={
                      data.discount
                        ? "text-decoration-line-through text-muted"
                        : ""
                    }>
                    {data.price}{" "}
                  </b>
                  <b>{data.discount ? data.priceDiscount : ""}</b>
                </Card.Text>
                <Card.Subtitle className="text-muted">
                  <Icon
                    path={mdiStar}
                    size={0.8}
                    color="yellow"
                    className="mb-1"
                  />
                  {data.rating} | Terjual {data.sale}+
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
