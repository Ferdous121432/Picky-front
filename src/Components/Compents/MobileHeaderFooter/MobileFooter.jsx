import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function MobileFooter() {
  return (
    <div>
      <div className="lg:hidden" />
      <div className="fixed bottom-0 left-0 z-[1000] w-full lg:hidden">
        <div className="flex h-14 w-full flex-row gap-4 bg-slate-50 px-6 py-4 text-md">
          <div className="w-full">
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <div className="w-full">
            <FontAwesomeIcon icon={faHeart} />
          </div>
          <div className="w-full">
            <FontAwesomeIcon icon={faCartShopping} />
          </div>
          <div className="w-full">
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
    </div>
  );
}
