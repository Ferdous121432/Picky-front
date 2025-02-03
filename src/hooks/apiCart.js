import axios from "axios";

import { baseURL, carItemsURL } from "./apiURL";
import { toast } from "react-toastify";

// post & patch request will be handle with this route
export const addToCart = async (credentials, token) => {
  try {
    console.log(credentials);
    const response = await fetch(`${baseURL}/${carItemsURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    console.log(response);
    if (response.status === 201) {
      toast.success(`Product ${credentials.productName} added to cart`);
      console.log(`Product ${credentials.productName} added to cart`);
    } else {
      console.error("Failed to add product to cart");
    }
  } catch (error) {
    toast.error("Error adding product to cart:");
    console.error("Error adding product to cart:", error);
  }
};

export const deleteFromCart = async (cartItem, token) => {
  try {
    const response = await axios.delete(
      `${baseURL}/${carItemsURL}/${cartItem._id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.status === 204) {
      console.log(
        `${cartItem.productName} with ID ${cartItem._id} deleted from cart`,
      );
    } else {
      console.error("Failed to delete product from cart");
    }
  } catch (error) {
    console.error("Error deleting product from cart:", error);
  }
};

//TODO: After updating cart item, the cart page should be updated with the new data
export const getCart = async (token) => {
  try {
    const response = await fetch.get(`${baseURL}/${carItemsURL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(credentials),
    });

    console.log(response);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to get cart items");
    }
  } catch (error) {
    console.error("Error getting cart items:", error);
  }
};

//TODO: After updating cart item, the cart page should be updated with the new data
export const updateCartItem = async (cartItem, token) => {
  try {
    const response = await axios.patch(
      `${baseURL}/${carItemsURL}/${cartItem._id}`,
      cartItem,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.status === 200) {
      console.log(`Updated ${cartItem.productName} in cart`);
    } else {
      console.error("Failed to update cart item");
    }
  } catch (error) {
    console.error("Error updating cart item:", error);
  }
};
