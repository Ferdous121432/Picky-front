/* eslint-disable */

import React, { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  baseURL,
  loginURL,
  userURL,
  mycartURL,
  signupURL,
  userEditProfileURL,
} from "../hooks/apiURL";

// Initial state
const initialState = {
  isAuthenticated: false,
  isVerified: false,
  user: null,
  loading: false,
  error: null,
  token: null,
  status: null,
  userData: null,
  cartData: null,
  update_status: null,
  signupStatus: null,
  signupMessage: null,
  signupError: null,
};

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        isVerified: action.payload.data.user.verified,
        user: action.payload.data.user,
        token: action.payload.token,
        loading: false,
        error: null,
        status: "success",
        userData: action.payload.userData,
      };

    case "USER_DATA":
      return {
        ...state,
        userData: action.payload.userData,
        cartData: action.payload.cartData,
        loading: false,
      };

    case "SIGNUP_SUCCESS":
      return {
        ...state,
        signupStatus: action.payload.status,
        signupData: action.payload.message,
        loading: false,
        error: null,
      };

    case "SIGNUP_ERROR":
      return {
        ...state,
        signupStatus: action.payload.status,
        signupData: action.payload.message,
        loading: false,
      };

    case "UPDATE_ME":
      return {
        ...state,
        loading: false,
        update_status: action.payload,
        error: null,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        isVerified: false,
        user: null,
        loading: false,
        error: null,
      };

    case "AUTH_ERROR":
      return {
        ...state,
        isAuthenticated: false,
        isVerified: false,
        user: null,
        loading: false,
        token: null,
        status: null,
        userData: null,
        error: action.payload,
      };

    case "LOAD_STATE":
      return {
        ...state,
        ...action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

// Create context
export const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load state from local storage
  useEffect(() => {
    // dispatch({ type: "LOADING" });

    const storedState = localStorage.getItem("appState");
    if (storedState) {
      dispatch({ type: "LOAD_STATE", payload: JSON.parse(storedState) });
    }
  }, []);

  // Login function to authenticate the user and save the token to local storage and user data to state and local storage
  const login = async (credentials) => {
    dispatch({ type: "LOADING" });
    try {
      const url = `${baseURL}/${loginURL}`;
      const response = await axios.post(url, credentials);
      console.log(response.data);

      localStorage.setItem(
        "appState",
        JSON.stringify({
          isAuthenticated: true,
          isVerified: response.data.data.verified,
          userData: response.data.data.user,
          token: response.data.token,
          loading: false,
          error: null,
          status: "success",
        }),
      );
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          ...response.data,
        },
      });
      console.log("Sign in successful:", response.data);
    } catch (error) {
      console.error("Error signing in:", error);
      dispatch({ type: "AUTH_ERROR", payload: error.message });
    }
  };

  // Fetch the user's data when the token changes and it will ensure whether page is authenticated or not and fetch the user data
  useEffect(() => {
    const fetchUserData = async () => {
      dispatch({ type: "LOADING" });
      if (state.token) {
        try {
          const userdata = await axios.get(`${baseURL}/${userURL}`, {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          });

          const cartData = await axios.get(`${baseURL}/${mycartURL}`, {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          });
          dispatch({
            type: "USER_DATA",
            payload: {
              data: { user: state.user },
              token: state.token,
              userData: userdata.data.data.data,
              cartData: cartData?.data?.data,
              loading: false,
            },
          });
        } catch (error) {
          console.error("Error fetching user data:", error);
          dispatch({ type: "AUTH_ERROR", payload: error.message });
          dispatch({ type: "LOGOUT" });
        }
      }
    };

    fetchUserData();
  }, [state.token]);

  // Signup function to create a new user account
  const signup = async (signupData) => {
    dispatch({ type: "LOADING" });
    try {
      const url = `${baseURL}/${signupURL}`;
      const response = await axios.post(url, signupData);
      toast(response.data.message);

      dispatch({
        type: "SIGNUP_SUCCESS",
        payload: {
          status: response.data.status,
          message: response.data.message,
        },
      });
    } catch (error) {
      dispatch({
        type: "SIGNUP_ERROR",
        payload: {
          status: error.response.data.status,
          message: error.response.data.message,
        },
      });
      toast(error.response.data.message);
      console.log(error.response.data.message);
      console.log(state.signupError);
      console.log(state.signupStatus);

      // alert("❌❌❌😒", error.response.data.message);
    }
  };
  useEffect(() => {
    console.log(state);
  }, [state.signupStatus]);

  // Update Me
  const updateMe = async (data) => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.patch(
        `${baseURL}/${userEditProfileURL}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        },
      );
      // console.log(response.data.status);
      dispatch({
        type: "UPDATE_ME",
        payload: response.data.status,
      });
    } catch (error) {
      console.error("Error updating user data:", error);
      alert("Error updating user data:", error);
      dispatch({ type: "AUTH_ERROR", payload: error.message });
    }
  };

  // Logout function to remove the token from local storage and set the user state to null
  const logout = (e) => {
    dispatch({ type: "LOADING" });
    localStorage.removeItem("appState");
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ state, login, signup, logout, updateMe }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  if (!AuthContext) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return useContext(AuthContext);
};
