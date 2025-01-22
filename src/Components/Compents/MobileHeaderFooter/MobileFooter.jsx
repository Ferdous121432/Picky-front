import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function MobileFooter() {
  const mobileNav = [
    {
      icon: faHouse,
      title: "Home",
      link: "/",
    },
    {
      icon: faHeart,
      title: "Favorites",
      link: "/favorites",
    },
    {
      icon: faCartShopping,
      title: "Cart",
      link: "/cart",
    },
    {
      icon: faUser,
      title: "Account",
      link: "/userprofile",
    },
  ];
  return (
    <div>
      <div className="lg:hidden" />
      <div className="fixed bottom-0 left-0 z-[1000] w-full lg:hidden">
        <div className="flex h-14 w-full flex-row items-center justify-center gap-4 bg-slate-50 px-6 py-4 text-md">
          {mobileNav.map((item, i) => (
            <div
              key={i}
              className="flex w-full flex-col items-center justify-center"
            >
              <a href={item.link}>
                <FontAwesomeIcon icon={item.icon} size="lg" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
