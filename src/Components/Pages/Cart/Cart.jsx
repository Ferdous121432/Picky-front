/* eslint-disable */
import Layout from "../../Utils/Layout";
import React from "react";
import { useState } from "react";

import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import FeatureSection from "./FeatureSection";
import CartItemHeader from "./CartItemHeader";
import LoginAgain from "../../Compents/LoginAgain";
import Button from "../../Compents/Button/Button";
import SpinnerFullPage from "../../Compents/Spinner/SpinnerFullPage";
import ErrorPage from "../ErrorPage/ErrorPage";

import { useAuth } from "../../../context/AuthProvider";
import { makeMultiplePayments } from "../../../hooks/apiCheckout";
import useQueryHook from "../../../hooks/useQueryHook";
import { baseURL, mycartURL } from "../../../hooks/apiURL";
import { useQuery } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";
import { queryGetCart } from "../../../hooks/queryCartHook";

const Cart = () => {
  const cart_url = `${baseURL}/${mycartURL}`;

  const { state } = useAuth();

  const {
    data: myCart,
    isLoading,
    isFetching,
    status,
    isError,
  } = queryGetCart("cart", cart_url, state.token);

  const carts = myCart?.data?.cartItems;

  //TODO: Calculate total price
  const totalPrice = myCart?.data?.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  console.log(carts);

  // console.log(carts.length);

  const handleCheckout = () => {
    makeMultiplePayments(carts, state.token);
  };

  if (isFetching) {
    return <SpinnerFullPage />;
  }

  if (!state.isAuthenticated) {
    return <LoginAgain />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <SpinnerFullPage />;
  }

  if (carts?.length === 0 && status === "success") {
    return (
      <Layout>
        <div
          className="flex flex-col items-center justify-center gap-4 py-10"
          style={{ height: "50vh" }}
        >
          <div>No items in cart</div>
          <Button handleClick={() => Navigate("/")}>Continue Shopping</Button>
        </div>
      </Layout>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden bg-white pb-12">
      <Layout>
        <>
          <main className="z-10 -mt-1.5 w-full bg-white px-20 py-16 max-md:max-w-full max-md:px-5">
            <div className="flex flex-col gap-5 text-sm md:flex-row">
              <div className="flex w-[74%] flex-col max-md:ml-0 max-md:w-full">
                <div className="flex w-full flex-col max-md:mt-10 max-md:max-w-full">
                  <CartItemHeader />
                  <div className="mt-14 max-md:mr-2.5 max-md:mt-10 max-md:max-w-full">
                    {carts?.map((item) => (
                      <CartItem key={item._id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="ml-5 flex w-[24%] flex-col max-md:ml-0 max-md:w-full">
                <CartSummary
                  subtotal={totalPrice}
                  total={totalPrice}
                  handleCheckout={handleCheckout}
                />
              </div>
            </div>
          </main>
          <FeatureSection />
        </>
      </Layout>
    </div>
  );
};

export default Cart;
