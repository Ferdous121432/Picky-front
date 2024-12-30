import React from "react";
import ProductCard from "../../Compents/ProductCard/ProductCard";
import { div } from "framer-motion/client";

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

export default function CategoryProducts() {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-4 md:px-6">
      {products.map((product, index) => (
        <div className="w-[22%]" key={index}>
          <ProductCard
            image={product.image}
            discount={product.discount}
            newProduct={product.newProduct}
            name={product.name}
            description={product.description}
            price={product.price}
            oldPrice={product.oldPrice}
          />
        </div>
      ))}
    </div>
  );
}
