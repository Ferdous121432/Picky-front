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

import { baseURL, carItemsURL, productURL } from "../../../hooks/apiURL";
import useQueryHook from "../../../hooks/useQueryHook";
import { queryAddCart } from "../../../hooks/queryCartHook";
import { useAuth } from "../../../context/AuthProvider";
import { addToCart } from "../../../hooks/apiCart";

const productDetailsReviews = [
  "Description",
  "Reviews",
  "Shipping & Returns",
  "Size Guide",
];

export default function () {
  const [params, setParams] = useState("");
  const [productDetails, setProductDetails] = useState(0);
  const [productSize, setProductSize] = useState();
  const { state } = useAuth();

  let { product_name } = useParams();
  const url = `${baseURL}/${productURL}/${product_name}`;

  let productData = {};

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

  // ADD TO CART FUNCTIONALITY
  const url_add_cart = `${baseURL}/${carItemsURL}`;
  console.log(productData);

  let add_cart_data = {
    product_id: productData?._id,
    slug: productData?.slug,
    image: productData?.imageCover.split("/").slice(-1).join(),
    quantity: productData?.quantity ? productData?.quantity : 1,
    color: productData?.color,
    size: productSize,
    productName: productData?.name,
    price: productData?.price,
    subtotal: productData?.price * productData?.quantity,
    // product_spec: { color, sizes },
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();

    addToCart(add_cart_data, state.token);
  };

  // const {
  //   data: addCart,
  //   isFetching: addCartFetching,
  //   isFetched,
  //   status,
  //   isError: errorAddCart,
  // } = queryAddCart("AddCart", url_add_cart, add_cart_data, state.token);

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
                  setProductSize={setProductSize}
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
