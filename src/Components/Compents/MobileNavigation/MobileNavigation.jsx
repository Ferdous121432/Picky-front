import React, { useEffect, useState } from "react";

import { categories } from "../../../Asset/categories";
import MobileCategory from "./MobileCategory";
import {
  navCatList,
  navCategory,
  navMobile,
} from "../../Utils/MobileNavAnimation";
import { AnimatePresence, delay, motion, stagger } from "framer-motion";

export default function MobileNavigation({ navOpen, setNavOpen }) {
  const [open, setOpen] = useState(null);

  const handleOpen = (id) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };
  const anima = (variants) => {
    return {
      initial: "initial",
      animate: navOpen === true ? "enter" : "initial",
      // animate: "enter",
      exit: "exit",
      variants,
    };
  };
  const animation = (variants) => {
    return {
      initial: "initial",
      animate: open ? "enter" : "initial",
      exit: "exit",
      variants,
    };
  };

  const renderMobileNavCategory = () => {
    return (
      <motion.div key={open} className="bg-slate-500">
        <MobileCategory open={open} />
      </motion.div>
    );
  };

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      <div className="fixed left-0 top-0 z-[1000] h-screen bg-slate-700">
        <motion.div className="w-full bg-slate-900" {...anima(navMobile)}>
          <div className="w-[200vw]">
            <motion.div
              {...animation(navCatList)}
              className="flex h-screen w-screen flex-col items-center justify-center bg-slate-800"
            >
              <div className="mt-4 flex w-[60%] flex-col justify-start gap-3">
                {categories.map((category) => (
                  <div
                    onClick={() => handleOpen(category.id)}
                    className="flex items-center justify-center bg-slate-50"
                    key={category.id}
                    style={{
                      clipPath: "polygon(2% 0, 100% 0, 98% 100%, 0 100%)",
                    }}
                  >
                    <p className="px-2 py-1 uppercase">{category.name}</p>
                  </div>
                ))}
              </div>

              {/* Close Button */}
              <div
                onClick={() => setNavOpen(false)}
                className="absolute bottom-0 mb-[56px] flex w-full justify-center bg-red-800 py-4 text-lg text-red-100"
              >
                Close
              </div>
            </motion.div>
            {open && (
              <motion.div
                {...animation(navCategory)}
                className="flex h-screen w-screen flex-col items-center justify-center bg-yellow-800"
              >
                {renderMobileNavCategory()}
                <button onClick={handleClick}>dd</button>
                {/*Back & Close Button */}
                <div className="absolute bottom-0 mb-[56px] flex w-screen flex-row bg-slate-900 text-slate-50">
                  <div
                    onClick={() => setOpen(false)}
                    className="flex w-full justify-center border-r-2 border-slate-100 py-4 text-lg text-red-100"
                  >
                    Back
                  </div>
                  <div
                    onClick={() => setNavOpen(false)}
                    className="flex w-full justify-center py-4 text-lg text-red-100"
                  >
                    Close
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
