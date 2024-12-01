import React from "react";
import ProductCard from "../../Compents/ProductCard/ProductCard";

const ProductDetails = [
  {
    image: "https://via.placeholder.com/150",
    discount: "10%",
    newProduct: true,
    name: "Product 1",
    description: "This is a description for Product 1",
    price: "100",
    oldPrice: "110",
  },
  {
    image: "https://via.placeholder.com/150",
    discount: "15%",
    newProduct: true,
    name: "Product 2",
    description: "This is a description for Product 2",
    price: "200",
    oldPrice: "230",
  },
];

export default function NewArrival() {
  return (
    <div className="flex w-[20rem]">
      <ProductCard
        image={ProductDetails[0].image}
        discount={ProductDetails[0].discount}
        newProduct={ProductDetails[0].newProduct}
        name={ProductDetails[0].name}
        description={ProductDetails[0].description}
        price={ProductDetails[0].price}
        oldPrice={ProductDetails[0].oldPrice}
      />
    </div>
  );
}
