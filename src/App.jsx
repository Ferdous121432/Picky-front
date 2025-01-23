import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Homepage from "./Components/Pages/Home/Homepage";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import CategoryPage from "./Components/Pages/Category/CategoryPage";
import ProductPage from "./Components/Pages/ProductPage/ProductPage";
import Signup from "./Components/Pages/Signup/Signup";
import Signin from "./Components/Pages/Signin/Signin";
import Cart from "./Components/Pages/Cart/Cart";
import About from "./Components/Pages/About/About";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Favorite from "./Components/Pages/Favorite/Favorite";
import UserProfile from "./Components/Pages/UserProfile/UserProfile";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Disable refetch on window focus
      refetchOnMount: true, // Refetch on mount if URL changes
      staleTime: 1000 * 60 * 5, // 15 minutes
      retry: 1, // Retry failed requests once
      retryDelay: 30000, // Retry after 30 seconds
      networkTimeout: 20000, // Set error if loading time exceeds 20 seconds

      cacheTime: 1000 * 60 * 0, // 30 minutes
      onError: (error) => {
        toast.error(`Error: ${error.message}`);
        console.log(error);
      },
    },
  },
});

export default function App() {
  const location = useLocation();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/category/:category_name" element={<CategoryPage />} />
            <Route path="/product/:product_name" element={<ProductPage />} />

            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorite />} />
          </Routes>
        </AnimatePresence>
      </QueryClientProvider>
      <ToastContainer
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}
