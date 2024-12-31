import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Homepage from "./Components/Pages/Home/Homepage";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import CategoryPage from "./Components/Pages/Category/CategoryPage";
import ProductPage from "./Components/Pages/ProductPage/ProductPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Disable refetch on window focus
      staleTime: 1000 * 60 * 15, // 15 minutes
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
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/product/:product_name" element={<ProductPage />} />
          </Routes>
        </AnimatePresence>
      </QueryClientProvider>
    </>
  );
}
