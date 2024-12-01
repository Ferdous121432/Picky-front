// TODO: at renderFlyoutContent() add the correct component to render or changeit according to the flyoutContent prop

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Projects from "./Projects";
import { AnimatePresence, delay, motion, stagger } from "framer-motion";

import Homepage from "../../Pages/Home/Homepage";

const flyoutVariants = {
  hidden: {
    opacity: 0,
    y: 15,
    transition: {
      staggerChildren: 0.5,
      delay: 0.5,
      duration: 0.5,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function FlyoutLink({
  children,
  flyoutContent,
  link,
  lastChild,
}) {
  const [open, setOpen] = useState(false);

  const showFlyout = open && flyoutContent;

  const renderFlyoutContent = () => {
    switch (flyoutContent) {
      case "home":
        return <Projects />;

      default:
        return (
          <div>
            <Projects />
          </div>
        );
    }
  };

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="group z-20 h-fit w-full"
      style={{
        textAlign: lastChild ? "end" : "start",
      }}
    >
      <a href={link} className="relative">
        {children}

        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="roundedtrue absolute -bottom-2 -left-2 -right-2 h-1 origin-left bg-slate-200 transition-transform duration-300 ease-out"
        ></span>
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            variants={flyoutVariants}
            initial="hidden"
            animate="visible"
            style={{ x: "-50%" }}
            className="absolute left-1/2 top-14"
          >
            <div className="absolute -top-4 left-0 right-0 h-12 w-full bg-transparent" />
            {/* <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-slate-600" /> */}
            {showFlyout && renderFlyoutContent()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
