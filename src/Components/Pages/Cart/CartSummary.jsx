/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Compents/Button/Button";
import Constants from "../../../../constants";

const CartSummary = ({ subtotal, total, handleCheckout }) => {
  return (
    <div className="mx-auto flex w-full flex-col bg-slate-200 px-8 pb-20 pt-4">
      <h2 className="self-center text-xl font-semibold text-black">
        Cart Totals
      </h2>
      <div className="mt-16 flex w-full flex-col items-center justify-between gap-5">
        <table className="flex w-full flex-col items-center justify-center whitespace-nowrap bg-slate-200 font-medium text-slate-800 md:max-w-full">
          <tbody className="flex w-full max-w-[400px] flex-wrap justify-between gap-5">
            <tr className="flex w-full justify-between">
              <td>Subtotal</td>
              <td>${subtotal}</td>
            </tr>
            <tr className="flex w-full justify-between">
              <td>Shipping</td>
              <td>Free Shipping</td>
            </tr>
            <tr className="flex w-full justify-between">
              <td>Total</td>
              <td>${total}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-10">
          <Button
            hover="hover:bg-slate-800 hover:font-bold  hover:text-slate-200  "
            color="text-slate-50 bg-slate-900 text-sm  max-w-[200px] "
            handleClick={handleCheckout}
          >
            Check Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
