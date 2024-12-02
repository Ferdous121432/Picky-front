import React from "react";
import Header from "../Compents/Header/Header";
import Footer from "../Compents/Footer/Footer";
import MobileFooter from "../Compents/MobileHeaderFooter/MobileFooter";
import MobileHeader from "../Compents/MobileHeaderFooter/MobileHeader";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <MobileHeader />
      <div>{children}</div>
      <Footer />
      <MobileFooter />
    </div>
  );
}
