/* eslint-disable */
import React, { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";
import { baseURL, productURL, carItemsURL } from "../api/apiURL";
import { useAuth, AuthProvider } from "./AuthProvider";
// Initial state
const initialState = {
  products: [],
  loading: true,
  error: null,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "ADDCART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

// Create context
export const ProductContext = createContext();

// Context provider component
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}/${productURL}`);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data.data });
        console.log(response);
      } catch (error) {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      }
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the ProductContext
export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};
