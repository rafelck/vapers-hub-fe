import { Card, Row, Col } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";

function handleClick() {
  alert("test");
}

export default function PopularProduct({ produkName, products }) {
  return (
    <div className="mb-3">
      <Row>
        <Col className="mb-3">
          <h4 className="fw-bold text-dark">Promo {produkName}</h4>
        </Col>
        <Col className="mb-3">
          <a
            href="/"
            className="float-end text-primary"
            style={{ textDecoration: "none" }}>
            Lihat Semua
          </a>
        </Col>
      </Row>

      <Row xs={2} md={4} className="g-4">
        {products.map((data, i) => (
          <Col key={i}>
            <Card className="shadow products" onClick={handleClick}>
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
