import { deleteFromCart } from "./apiCart";

export const handleDeleteHook = async (e, item, token) => {
  try {
    e.preventDefault();
    await deleteFromCart(item, token);
    // Remove the item from the front end without reloading
    document.getElementById(`${item._id}`).remove();
  } catch (error) {
    console.error("Error deleting product from cart:", error);
  }
};
