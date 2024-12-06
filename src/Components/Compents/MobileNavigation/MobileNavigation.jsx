import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { i, use } from "framer-motion/client";

import MobileCategory from "./MobileCategory";
import {
  navCatList,
  navCategory,
  navMobile,
} from "../../Utils/MobileNavAnimation";
import { AnimatePresence, delay, motion, stagger } from "framer-motion";

const categoryList = [
  {
    id: 1,
    name: "Home",
    to: "#",
  },
  {
    id: 2,
    name: "About",
    to: "#",
  },
];

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
    // setNavOpen(false);
    setOpen(false);
    console.log("ssssssssss");
  };

  return (
    <AnimatePresence mode="wait">
      <div className="fixed left-0 top-0 z-[1000] h-screen bg-slate-700">
        <motion.div className="w-full bg-slate-900" {...anima(navMobile)}>
          <div className="w-[200vw]">
            <motion.div
              {...animation(navCatList)}
              className="flex h-screen w-screen flex-col items-center justify-center bg-red-700"
            >
              <div className="mx-auto mt-4 flex w-[60%] flex-col justify-start gap-3">
                {categoryList.map((category) => (
                  <div
                    onClick={() => handleOpen(category.id)}
                    className="flex items-center justify-center bg-slate-50"
                    key={category.id}
                    style={{
                      clipPath: "polygon(2% 0, 100% 0, 98% 100%, 0 100%)",
                    }}
                  >
                    <p className="px-2 py-1">{category.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            {open && (
              <motion.div
                {...animation(navCategory)}
                className="flex h-screen w-screen flex-col items-center justify-center bg-yellow-800"
              >
                ddddd
                <button onClick={handleClick}>dd</button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// <motion.div
//         {...anima(navMobile)}
//         className="relative flex items-center justify-center"
//       >
//         <div className="fixed left-0 top-0 z-[100] flex h-screen flex-col justify-start bg-red-800 lg:hidden">
//           <div className="mt-4 w-screen p-2">
//             {/* Header Logo section */}
//             <div className="flex flex-col items-center justify-center">
//               <div className="flex items-center justify-center">
//                 <img src="./Picky.svg" alt="logo" className="h-8 md:h-12" />
//               </div>
//               <span className="mt-2 block h-[2px] w-[60vw] bg-slate-800" />
//             </div>

//             {/* Navigation Links */}
//             <div className="flex flex-row">
//               <motion.div className="w-screen" {...animation(navCatList)}>
//                 <div className="mx-auto mt-4 flex w-[60%] flex-col justify-start gap-3">
//                   {categoryList.map((category) => (
//                     <div
//                       onClick={() => handleOpen(category.id)}
//                       className="flex items-center justify-center bg-slate-50"
//                       key={category.id}
//                       style={{
//                         clipPath: "polygon(2% 0, 100% 0, 98% 100%, 0 100%)",
//                       }}
//                     >
//                       <p className="px-2 py-1">{category.name}</p>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//               <motion.div
//                 className="h-screen w-screen bg-slate-100"
//                 {...animation(navCategory)}
//               >
//                 {open && (
//                   <div className="mt-4">{renderMobileNavCategory()}</div>
//                 )}
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
