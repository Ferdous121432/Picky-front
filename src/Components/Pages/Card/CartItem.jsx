/* eslint-disable */
import React, { useState } from "react";
import { deleteFromCart } from "../../../hooks/apiCart";
import { useAuth } from "../../../context/AuthProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "../../Compents/Button/Button";
import Constants from "../../../../constants";

const CartItem = ({ item }) => {
  const { state } = useAuth();
  const { token } = state;

  const [itemQuantity, setQuantity] = useState(item.quantity);

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      await deleteFromCart(item, token);
      // Remove the item from the front end without reloading
      document.getElementById(`${item._id}`).remove();
    } catch (error) {
      console.error("Error deleting product from cart:", error);
    }
  };

  const { image, productName, price, quantity, subtotal, _id, product_spec } =
    item;
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

  return (
    <div id={`${_id}`} className="flex gap-5 max-md:flex-col">
      <div className="flex w-[35%] flex-col max-md:ml-0 max-md:w-full">
        <div className="text-base flex grow gap-9 text-neutral-400 max-md:mt-10">
          <img
            loading="lazy"
            src={image}
            alt={productName}
            className="aspect-[1.03] w-[54px] max-w-full shrink-0 rounded-none object-contain" // Adjusted width for smaller image
            srcSet={`${image}?w=54&h=54&fit=crop&auto=format 1x, ${image}?w=108&h=108&fit=crop&auto=format 2x`} // Adjusted srcSet for smaller image
          />
          <div className="my-auto w-[86px] shrink grow">
            <h1 className="text-md text-slate-900">{productName}</h1>
            <p className="flex flex-row gap-2 text-sm">
              {/* <span>size: {product_spec.sizes}</span>
              <span>color: {product_spec.color}</span> */}
            </p>
          </div>
        </div>
      </div>
      <div className="ml-5 flex w-[65%] flex-col max-md:ml-0 max-md:w-full">
        <div className="text-base my-auto flex gap-10 self-stretch text-black max-md:mt-10 max-md:max-w-full">
          <div className="my-auto basis-auto text-slate-900">{price}</div>
          <div className="flex items-center">
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
              className="text-base w-16 rounded border border-gray-300 px-2 py-1"
              value={itemQuantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              onClick={handleIncreaseQuantity}
              className="rounded-r-md border border-neutral-400 px-2 py-1"
            >
              +
            </button>
          </div>
          <div className="my-auto basis-auto">{subtotal}</div>
          <Button color={Constants.YELLOW_PRIMARY} handleClick={handleDelete}>
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
