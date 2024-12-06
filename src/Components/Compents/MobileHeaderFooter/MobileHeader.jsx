import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "../Header/Logo";
import TopHeader from "../Header/TopHeader";
import { createRef, useEffect, useState } from "react";

import { motion, useScroll } from "framer-motion";
import { nav } from "framer-motion/client";

export default function MobileHeader({ handleMobileNav }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const headerRef = createRef();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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

  const header = {
    initial: { y: 0 },
    animate: { y: -200, transition: { duration: 0.5 } },
    exit: { y: 0 },
  };

  if (isScrolled) {
    return (
      <motion.div
        {...animation(popHeader)}
        className="z-[1000] bg-slate-100 lg:hidden"
      >
        <MainHeaderMobile handleMobileNav={handleMobileNav} />
      </motion.div>
    );
  }

  return (
    <motion.div
      {...animation(header)}
      className="z-[100] bg-slate-100 lg:hidden"
    >
      <TopHeaderMobile />
      <MainHeaderMobile handleMobileNav={handleMobileNav} />
    </motion.div>
  );
}

const MainHeaderMobile = ({ handleMobileNav }) => {
  return (
    <div className="flex flex-row items-center justify-between px-8 py-2 md:py-4">
      <div className="z-[1000]" onClick={handleMobileNav}>
        <svg
          className="w-4 sm:w-5 md:w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <Logo />
      <div>
        <svg
          className="w-4 sm:w-5 md:w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>
    </div>
  );
};

const TopHeaderMobile = () => {
  return (
    <div className="w-full items-center justify-center">
      <h1 className="mx-auto bg-slate-800 px-1 py-2 text-center text-xs font-semibold tracking-wider text-slate-100">
        Step into the Festive Season with Picky
      </h1>
    </div>
  );
};
