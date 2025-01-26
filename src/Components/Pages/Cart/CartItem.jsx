/* eslint-disable */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

import { useAuth } from "../../../context/AuthProvider";
import { handleDeleteHook } from "../../../hooks/carthook";
import { queryUpdateCart } from "../../../hooks/queryCartHook";
import { baseURL, carItemsURL } from "../../../hooks/apiURL";
import { div, q } from "framer-motion/client";

const CartItem = ({ item }) => {
  const [itemQuantity, setQuantity] = useState(item.quantity);
  const { state } = useAuth();
  const { token } = state;
  const url_update_cart = `${baseURL}/${carItemsURL}/${item._id}`;

  // TODO: DELETE
  const handleDelete = (e) => {
    handleDeleteHook(e, item, token);
  };

  const { image, productName, price, quantity, _id, product_spec } = item;

  const handleIncreaseQuantity = () => {
    if (itemQuantity < 10) {
      setQuantity(itemQuantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (itemQuantity > 1) {
      setQuantity(itemQuantity - 1);
    }
  };

  const update_cart_data = {
    quantity: itemQuantity,
  };

  const {
    data: myCart,
    isLoading,
    isFetching,
    isFetched,

    status,
    isError,
  } = queryUpdateCart(
    itemQuantity,
    url_update_cart,
    update_cart_data,
    state.token,
  );

  return (
    <div className="flex w-full p-1">
      <table
        id={`${_id}`}
        className="relative flex w-full items-center justify-center text-xs"
      >
        <tbody className="relative flex w-full">
          <tr className="flex w-full items-center justify-between gap-2">
            <td className="flex min-w-[2rem] items-center justify-center">
              <img
                loading="lazy"
                src={image}
                alt={productName}
                className="aspect-[1.03] w-[54px] max-w-full shrink-0 rounded-none object-contain"
                srcSet={`${image}?w=54&h=54&fit=crop&auto=format 1x, ${image}?w=108&h=108&fit=crop&auto=format 2x`}
              />
            </td>
            <td>
              <h1 className="text-md text-slate-900">{productName}</h1>
              {/* TODO: Add product_spec to the product object */}
              <p className="flex flex-row gap-2 text-xs text-slate-800">
                <span>Size: M </span>
                <span>color: Black </span>
              </p>
            </td>
            <td>
              <div className="my-auto basis-auto text-slate-900">{price}</div>
            </td>
            <td className="flex flex-col items-center justify-center sm:flex-row">
              <button
                onClick={handleDecreaseQuantity}
                className="rounded-l-md border border-neutral-400 px-2 py-1"
              >
                -
              </button>
              <input
                id={`quantity-${_id}`}
                type="number"
                min="1"
                max="10"
                className="text-base smpx-2 rounded border border-gray-300 py-1 text-center"
                value={itemQuantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              />
              <button
                onClick={handleIncreaseQuantity}
                className="rounded-r-md border border-neutral-400 px-2 py-1"
              >
                +
              </button>
            </td>
            <td>
              <div className="my-auto basis-auto">{price * itemQuantity}</div>
            </td>
          </tr>
        </tbody>
        <div className="absolute right-[-1rem] top-[50%] translate-y-[-50%]">
          <button className="cursor-pointer" onClick={handleDelete}>
            <FontAwesomeIcon
              className="text-red-800 hover:scale-150"
              icon={faTrash}
            />
          </button>
        </div>
      </table>
    </div>
  );
};

export default CartItem;
