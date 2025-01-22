import axios from "axios";

import { baseURL, userOrdersURL } from "./apiURL";

export const getOrdersByUser = async (token) => {
  try {
    const response = await axios.get(`${baseURL}/${userOrdersURL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data.data.orders);
    return response.data.data.orders;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
