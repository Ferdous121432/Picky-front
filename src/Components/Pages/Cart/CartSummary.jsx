/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Compents/Button/Button";
import Constants from "../../../../constants";

const CartSummary = ({ subtotal, total, handleCheckout }) => {
  return (
    <div className="mx-auto flex w-full flex-col bg-slate-200 px-20 pb-20 pt-4 max-md:mt-10 max-md:px-5">
      <h2 className="self-center text-3xl font-semibold text-black">
        Cart Totals
      </h2>
      <div className="mt-16 flex justify-between gap-5 max-md:mt-10">
        <div className="text-base flex flex-col self-start whitespace-nowrap font-medium text-black">
          <div>Subtotal</div>
          <div className="mt-8 self-start">Total</div>
        </div>
        <div className="flex flex-col">
          <div className="text-base self-end text-neutral-400">{subtotal}</div>
          <div className="mt-8 text-xl font-medium text-yellow-600">
            {total}
          </div>
        </div>
      </div>

      <Button handleClick={handleCheckout} color={Constants.YELLOW_PRIMARY}>
        Check Out
      </Button>
    </div>
  );
};

export default CartSummary;
