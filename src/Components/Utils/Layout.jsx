import React from "react";
import { useState } from "react";
import Header from "../Compents/Header/Header";
import Footer from "../Compents/Footer/Footer";
import MobileFooter from "../Compents/MobileHeaderFooter/MobileFooter";
import MobileHeader from "../Compents/MobileHeaderFooter/MobileHeader";
import MobileNavigation from "../Compents/MobileNavigation/MobileNavigation";

export default function Layout({ children }) {
  const [navOpen, setNavOpen] = useState(false);

  const handleMobileNav = () => {
    setNavOpen((navOpen) => !navOpen);
    console.log("ss");
  };

  return (
    <div>
      <Header />
      <MobileHeader handleMobileNav={handleMobileNav} />
      {navOpen && (
        <MobileNavigation navOpen={navOpen} setNavOpen={setNavOpen} />
      )}
      <div>{children}</div>
      <Footer />
      <MobileFooter />
    </div>
  );
}
