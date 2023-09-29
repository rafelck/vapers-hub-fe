import { Carousel, Image } from "react-bootstrap";

export default function Banner({ banners }) {
  return (
    <div className="mb-3">
      <Carousel>
        {banners.map((data, i) => (
          <Carousel.Item key={i}>
            <a href="#">
              <Image className="w-100" src={data.images} rounded fluid />
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
