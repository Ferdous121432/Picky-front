import axios from "axios";
import {
  baseURL,
  productCategory,
  productsByCategory,
  productURL,
} from "./apiURL";

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${baseURL}/${productURL}/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

// Product Category
export const getCategories = async () => {
  try {
    const response = await axios.get(`${baseURL}/${productCategory}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

// Products By Category
export const getProductsByCategory = async (categoryId) => {
  try {
    const response = await axios.get(
      `${baseURL}/${productsByCategory}/${categoryId}`,
    );
    console.log(response?.data?.data?.products);
    return response?.data?.data?.products;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
