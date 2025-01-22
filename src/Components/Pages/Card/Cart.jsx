/* eslint-disable */
import Layout from "../../Utils/Layout";
import React from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import FeatureSection from "./FeatureSection";
import { useAuth } from "../../../context/AuthProvider";
import CartItemHeader from "./CartItemHeader";
import { makeMultiplePayments } from "../../../hooks/apiCheckout";
import LoginAgain from "../../Compents/LoginAgain";
import Button from "../../Compents/Button/Button";

const Cart = () => {
  const { state } = useAuth();
  const cart = state.cartData ? state.cartData.cartItems : [];
  const totalPrice = state.cartData ? state.cartData.totalPrice : 0;
  console.log(cart.length);
  console.log(totalPrice);

  const handleCheckout = () => {
    makeMultiplePayments(cart, state.token);
  };

  if (cart.length === 0) {
    return (
      <Layout>
        <div
          className="flex flex-col items-center justify-center gap-4 py-10"
          style={{ height: "50vh" }}
        >
          <div>No items in cart</div>
          <Button handleClick={() => (window.location.href = "/")}>
            Continue Shopping
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden bg-white pb-12">
      <Layout>
        <>
          <main className="z-10 -mt-1.5 w-full bg-white px-20 py-16 max-md:max-w-full max-md:px-5">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex w-[68%] flex-col max-md:ml-0 max-md:w-full">
                <div className="flex w-full flex-col max-md:mt-10 max-md:max-w-full">
                  <CartItemHeader />
                  <div className="mr-6 mt-14 max-md:mr-2.5 max-md:mt-10 max-md:max-w-full">
                    {cart.map((item) => (
                      <CartItem key={item._id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="ml-5 flex w-[32%] flex-col max-md:ml-0 max-md:w-full">
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
