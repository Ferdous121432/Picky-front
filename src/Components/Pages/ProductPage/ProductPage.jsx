import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Layout from "../../Utils/Layout";
import ProductImages from "./ProductImages";
import ProductHeaderDetails from "./ProductHeaderDetails";
import ProductDescription from "./ProductDescription";
import ProductReviews from "./ProductReviews";
import ShippingReturns from "./ShippingReturns";
import ErrorPage from "../ErrorPage/ErrorPage";
import SizeGuide from "./SizeGuide";
import SpinnerFullPage from "../../Compents/Spinner/SpinnerFullPage";

import { url_base } from "../../../hooks/urls";
import useQueryHook from "../../../hooks/useQueryHook";
import { queryAddCart } from "../../../hooks/queryCartHook";
import { useAuth } from "../../../context/AuthProvider";

const productDetailsReviews = [
  "Description",
  "Reviews",
  "Shipping & Returns",
  "Size Guide",
];

export default function () {
  const [productDetails, setProductDetails] = useState(0);
  const { state } = useAuth();

  const [params, setParams] = useState("");
  let { product_name } = useParams();
  const url = `${url_base}/products/${product_name}`;
  let productData = {};
  let add_cart_data = {
    cartID: "66ebf95e087bdf0a82738427",
    product_id: "678e62b138e910dea9492ee9",
    quantity: 8,
    productName: "denim Shirt",
    price: 1000,
    image: "product-864634-1737660952643-cover-image.jpeg",
  };

  useEffect(() => {
    setParams(product_name);
    console.log(product_name);
  }, [product_name]);

  const {
    isLoading,
    isFetching,
    data: products,
    error,
    isError,
  } = useQueryHook(params, url);
  productData = products?.data?.data;
  console.log(productData);

  const url_add_cart = `${url_base}/cartitems`;

  const handleAddToCart = async () => {
    if (!errorAddCart) {
      toast.success("Item added to cart");
    } else {
      toast.error("Failed to add item to cart");
    }
  };

  const {
    data: addCart,
    isFetching: addCartFetching,
    isFetched,
    status,
    isError: errorAddCart,
  } = queryAddCart("AddCart", url_add_cart, add_cart_data, state.token);

  if (isFetching) return <SpinnerFullPage />;

  if (isError) {
    console.log(error);
    return <ErrorPage />;
  }

  const renderProductDetails = () => {
    switch (productDetails) {
      case 0:
        return <ProductDescription description={productData.description} />;
      case 1:
        return <ProductReviews reviews={productData.reviews} />;
      case 2:
        return <ShippingReturns />;
      case 3:
        return <SizeGuide />;
      default:
        return <ProductDescription />;
    }
  };

  if (productData)
    return (
      <div>
        <Layout>
          <div className="mb-10">
            {/* Top Part : Product Images and Header Details */}
            <div className="mx-auto mt-4 flex max-w-[1400px] justify-center md:items-center">
              <div className="flex w-screen flex-col justify-center gap-2 md:flex-row">
                <ProductImages images={productData.images} />
                <ProductHeaderDetails
                  handleAddToCart={handleAddToCart}
                  details={productData}
                />
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
