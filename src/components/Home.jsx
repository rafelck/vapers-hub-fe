import { Container } from "react-bootstrap";
import Banner from "./Banner";
import Products from "./Products";

import Mod1 from "../assets/vape/mod_1.jpg";
import Mod2 from "../assets/vape/mod_2.jpg";
import Mod3 from "../assets/vape/mod_3.webp";
import Mod4 from "../assets/vape/mod_4.jpg";

import Liquid1 from "../assets/vape/liquid_1.jpg";
import Liquid2 from "../assets/vape/liquid_2.jpg";
import Liquid3 from "../assets/vape/liquid_3.jpeg";
import Liquid4 from "../assets/vape/liquid_4.jpg";

import Banner1 from "../assets/vape/banner_1.jpg";
import Banner2 from "../assets/vape/banner_2.jpg";

const banners = [
  {
    images: Banner1,
  },
  {
    images: Banner2,
  },
];

const productsMod = [
  {
    name: "Hexohm V3 mod",
    price: "3,000,000",
    discount: true,
    priceDiscount: "2,000,000",
    images: Mod1,
    rating: 4.8,
    sale: 100,
  },
  {
    name: "Centaurus M200",
    price: "520,000",
    discount: false,
    images: Mod2,
    rating: 4.8,
    sale: 100,
  },
  {
    name: "Hotcig R234",
    price: "550,000",
    priceDiscount: "2,000,000",
    images: Mod3,
    rating: 5,
    sale: 100,
  },
  {
    name: "Aegis Legend",
    price: "750,000",
    discount: false,
    priceDiscount: "2,000,000",
    images: Mod4,
    rating: 1,
    sale: 100,
  },
];

const productsLiquid = [
  {
    name: "OD V4",
    price: "150,000",
    discount: true,
    priceDiscount: "2,000,000",
    images: Liquid1,
    rating: 4.8,
    sale: 100,
  },
  {
    name: "Tokyo Banana",
    price: "130,000",
    discount: true,
    priceDiscount: "2,000,000",
    images: Liquid2,
    rating: 4.8,
    sale: 100,
  },
  {
    name: "Liquid KW Berry",
    price: "100,000",
    discount: true,
    priceDiscount: "2,000,000",
    images: Liquid3,
    rating: 5,
    sale: 100,
  },
  {
    name: "English Breakfast",
    price: "150,000",
    discount: true,
    priceDiscount: "2,000,000",
    images: Liquid4,
    rating: 3,
    sale: 25,
  },
];
export default function Home() {
  return (
    <>
      <div className="mt-3">
        <Container>
          <Banner banners={banners} />
          <Products produkName="Mod Device" products={productsMod} />
          <Products produkName="Liquid" products={productsLiquid} />
        </Container>
      </div>
    </>
  );
}
