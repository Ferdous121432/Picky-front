/* eslint-disable */
import Layout from "../../Utils/Layout";
import React, { useEffect } from "react";
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
import { baseURL, mycartURL } from "../../../hooks/apiURL";
import { Link, Navigate } from "react-router-dom";
import { queryGetCart } from "../../../hooks/queryCartHook";
const Cart = () => {
  const { state } = useAuth();
  const cart_url = `${baseURL}/${mycartURL}`;
  const [quantity, setQuantity] = useState([]);
  const [itemDeleted, setItemDeleted] = useState(false);

  const {
    data: myCart,
    isLoading,
    isFetching,
    status,
    isError,
  } = queryGetCart("cart", cart_url, state.token);

  const carts = myCart?.data?.cartItems;
  const cartQuantity = carts?.map((item) => item.quantity);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (carts) {
      setQuantity(carts.map((item) => item.quantity));
      const calculatedTotalPrice = carts.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
      setTotalPrice(calculatedTotalPrice);
    }
  }, [carts]);

  useEffect(() => {
    if (carts) {
      const calculatedTotalPrice = quantity.reduce(
        (acc, item, index) => acc + item * carts[index].price,
        0,
      );
      setTotalPrice(calculatedTotalPrice);
    }
  }, [quantity]);

  useEffect(() => {
    const calculatedTotalPrice = quantity.reduce(
      (acc, item, index) => acc + item * carts[index].price,
      0,
    );
    setTotalPrice(calculatedTotalPrice);
    console.log("total price", totalPrice);
    console.log(quantity);
  }, [quantity, itemDeleted, setItemDeleted]);

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

  if (quantity?.length === 0 && status === "success") {
    return (
      <Layout>
        <div
          className="flex flex-col items-center justify-center gap-4 py-10"
          style={{ height: "50vh" }}
        >
          <div>No items in cart</div>
          <Link to="/">
            <Button>Continue Shopping</Button>
          </Link>
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
                    {carts?.map((item, index) => (
                      <CartItem
                        key={item._id}
                        item={item}
                        itemNum={quantity[index]}
                        setItemNum={(newQuantity) => {
                          const updatedQuantities = [...quantity];
                          updatedQuantities[index] = newQuantity;
                          setQuantity(updatedQuantities);
                        }}
                        setItemDeleted={(deleted) => {
                          if (deleted) {
                            const updatedQuantities = quantity.filter(
                              (_, i) => i !== index,
                            );
                            setQuantity(updatedQuantities);
                          }
                          setItemDeleted(deleted);
                        }}
                      />
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
