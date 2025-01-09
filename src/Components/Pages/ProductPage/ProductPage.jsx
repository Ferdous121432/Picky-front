import React, { useEffect, useState } from "react";
import Layout from "../../Utils/Layout";
import ProductImages from "./ProductImages";
import ProductHeaderDetails from "./ProductHeaderDetails";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";
import ShippingReturns from "./ShippingReturns";
import SizeGuide from "./SizeGuide";

const productDetailsReviews = [
  "Description",
  "Reviews",
  "Shipping & Returns",
  "Size Guide",
];

export default function () {
  const [productDetails, setProductDetails] = useState(0);
  useEffect(() => {
    console.log(productDetails);
  }, [productDetails]);

  const renderProductDetails = () => {
    switch (productDetails) {
      case 0:
        return <ProductDescription />;
      case 1:
        return <ProductReviews />;
      case 2:
        return <ShippingReturns />;
      case 3:
        return <SizeGuide />;
      default:
        return <ProductDescription />;
    }
  };

  return (
    <div>
      <Layout>
        <div className="mb-10">
          {/* Top Part : Product Images and Header Details */}
          <div className="mx-auto mt-4 flex max-w-[1400px] justify-center md:items-center">
            <div className="flex w-screen flex-col justify-center gap-2 md:flex-row">
              <ProductImages />
              <ProductHeaderDetails />
            </div>
            <div></div>
          </div>
          {/* Bottom Part : Product Description and Reviews */}
          <div className="mx-4 mt-4 max-w-[1400px]">
            <div className="grid grid-cols-2 justify-center md:grid-cols-4">
              {productDetailsReviews.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setProductDetails(i)}
                  className="flex w-full items-center justify-center"
                >
                  <h1 className="flex h-full w-full items-center justify-center border-[1px] px-4 py-2 font-semibold uppercase">
                    {item}
                  </h1>
                </div>
              ))}
            </div>
            <div>{renderProductDetails()}</div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
