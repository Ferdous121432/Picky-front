import { useEffect, useState } from "react";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import Navigation from "../Navigation-popup/Navigation";
import { motion, useScroll } from "framer-motion";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <div className="header w-full">
      <TopHeader />
      <div className="">
        <MiddleHeader />
        <Navigation />
      </div>
    </div>
  );
}
