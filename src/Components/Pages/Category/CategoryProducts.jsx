import React from "react";
import ProductCard from "../../Compents/ProductCard/ProductCard";
import { div } from "framer-motion/client";
import { Link } from "react-router-dom";
import { front_url } from "../../../hooks/urls";

const products = [
  {
    image: "./sale/pickySale4.jpg",
    discount: "10%",
    newProduct: true,
    name: "Product 1",
    description: "This is a description for Product 1",
    price: "100",
    oldPrice: "110",
  },
  {
    image: "./sale/pickySale4.jpg",
    discount: "15%",
    newProduct: true,
    name: "Product 2",
    description: "This is a description for Product 2",
    price: "200",
    oldPrice: "230",
  },
  {
    image: "./sale/pickySale4.jpg",
    discount: "20%",
    newProduct: true,
    name: "Product 3",
    description: "This is a description for Product 3",
    price: "300",
    oldPrice: "350",
  },
  {
    image: "./sale/pickySale4.jpg",
    discount: "25%",
    newProduct: true,
    name: "Product 4",
    description: "This is a description for Product 4",
    price: "400",
    oldPrice: "450",
  },
  {
    image: "./sale/pickySale4.jpg",
    discount: "30%",
    newProduct: true,
    name: "Product 5",
    description: "This is a description for Product 5",
    price: "500",
    oldPrice: "550",
  },
];

export default function CategoryProducts({ category_products }) {
  const products = category_products || [];
  console.log(products);
  return (
    <div className="grid w-full grid-cols-1 items-center justify-between gap-2 px-2 py-2 xs:grid-cols-2 sm:grid-cols-3 sm:py-6 md:gap-4 md:px-6 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((product, index) => (
        <div className="" key={index}>
          <Link to={`/product/${product.slug}`}>
            <ProductCard product={product} />
          </Link>
        </div>
      ))}
    </div>
  );
}
