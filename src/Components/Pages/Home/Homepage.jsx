import React, { useState } from "react";
import Layout from "../../Utils/Layout";
import Hero from "./Hero";
import DeliveryOffer from "./DeliveryOffer";
import ProductsSection from "./ProductsSection";
import TrendingCategories from "./TrandingCategories";
import FeaturedBanner from "./FeaturedBanner";

const products = [
  {
    image: "./public/sale/pickySale4.jpg",
    discount: "10%",
    newProduct: true,
    name: "Product 1",
    description: "This is a description for Product 1",
    price: "100",
    oldPrice: "110",
  },
  {
    image: "./public/sale/pickySale4.jpg",
    discount: "15%",
    newProduct: true,
    name: "Product 2",
    description: "This is a description for Product 2",
    price: "200",
    oldPrice: "230",
  },
  {
    image: "./public/sale/pickySale4.jpg",
    discount: "20%",
    newProduct: true,
    name: "Product 3",
    description: "This is a description for Product 3",
    price: "300",
    oldPrice: "350",
  },
  {
    image: "./public/sale/pickySale4.jpg",
    discount: "25%",
    newProduct: true,
    name: "Product 4",
    description: "This is a description for Product 4",
    price: "400",
    oldPrice: "450",
  },
  {
    image: "./public/sale/pickySale4.jpg",
    discount: "30%",
    newProduct: true,
    name: "Product 5",
    description: "This is a description for Product 5",
    price: "500",
    oldPrice: "550",
  },
];

const categories = [
  {
    image: "./public/sale/pickySale4.jpg",
    name: "Category 1",
  },
  {
    image: "./public/sale/pickySale4.jpg",
    name: "Category 2",
  },
  {
    image: "./public/sale/pickySale4.jpg",
    name: "Category 3",
  },
  {
    image: "./public/sale/pickySale4.jpg",
    name: "Category 4",
  },
  {
    image: "./public/sale/pickySale4.jpg",
    name: "Category 5",
  },
  {
    image: "./public/sale/pickySale4.jpg",
    name: "Category 6",
  },
  {
    image: "./public/sale/pickySale4.jpg",
    name: "Category 7",
  },
  {
    image: "./public/sale/pickySale4.jpg",
    name: "Category 8",
  },
  {
    image: "./public/sale/pickySale4.jpg",
    name: "Category 9",
  },
  {
    image: "./public/sale/pickySale4.jpg",
    name: "Category 10",
  },
];

const deliveryImages = [
  {
    image: "./public/hero/sailor3.webp",
  },
  {
    image: "./public/hero/sailor4.webp",
  },
];

const winterImages = [
  {
    image: "./public/category/s1.jpg",
  },
  {
    image: "./public/category/s2.jpg",
  },
];

export default function Homepage() {
  return (
    <div className="h-screen w-screen bg-slate-100">
      <Layout>
        <Hero />

        <DeliveryOffer image={deliveryImages} />
        <ProductsSection
          title="Best Sellers"
          products={products}
          caseName="BestSellers"
        />
        <TrendingCategories />
        <ProductsSection
          title="Best Sellers"
          description="Winter/24"
          products={products}
          caseName="BestSellers"
        />
        <DeliveryOffer image={winterImages} />
        <ProductsSection
          title="Best Sellers"
          description="Featured"
          products={products}
          caseName="BestSellers"
        />
        <FeaturedBanner image={winterImages} />
      </Layout>
    </div>
  );
}
