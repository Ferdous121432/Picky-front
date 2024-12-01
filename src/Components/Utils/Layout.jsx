import React from "react";
import Header from "../Compents/Header/Header";
import Footer from "../Compents/Footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
