import React from "react";
import Homepage from "./Components/Pages/Home/Homepage";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </AnimatePresence>
  );
}
