import { createRef, useEffect, useState } from "react";
import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import Navigation from "../Navigation-popup/Navigation";
import { delay, motion, useScroll } from "framer-motion";
import zIndex from "@mui/material/styles/zIndex";
import MobileHeader from "../MobileHeaderFooter/MobileHeader";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = createRef();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setIsScrolled(true);
        console.log("scrolled");
      } else {
        setIsScrolled(false);
        console.log("not scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerRef]);

  const animation = (variants) => {
    return {
      initial: "initial",
      animate: isScrolled ? "enter" : "initial",
      exit: "exit",
      variants,
    };
  };

  const popHeader = {
    initial: {
      position: "fixed",
      top: 0,
      left: 0,
      y: -200,
      transition: { duration: 0.5 },
    },
    enter: {
      position: "fixed",
      top: 0,
      left: 0,
      y: 0,
      width: "100%",
      transition: { duration: 0.5 },
    },
  };

  if (isScrolled) {
    return (
      <div>
        <motion.div
          {...animation(popHeader)}
          className="header z-[100] hidden w-full shadow-2xl lg:block"
        >
          <motion.div className="">
            <MiddleHeader />
            <div className="hidden flex-row lg:flex">
              <div className="h-[2px] w-full bg-transparent" />
              <div className="w-full bg-slate-50" />
              <div className="h-[2px] w-full bg-transparent" />
              <div className="h-[2px] w-full bg-transparent" />
              <div className="w-full bg-slate-50" />
              <div className="h-[2px] w-full bg-transparent" />
            </div>
            <Navigation />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <motion.div className="header z-[100] hidden w-full shadow-2xl lg:block">
        <TopHeader />
        <motion.div className="">
          <MiddleHeader />
          <Navigation />
        </motion.div>
      </motion.div>
    </div>
  );
}
