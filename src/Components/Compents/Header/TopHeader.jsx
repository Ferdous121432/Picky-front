import React from "react";
import MaxWidth81 from "../../Utils/MaxWidth81";

export default function TopHeader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h1 className="w-screen bg-slate-800 py-2 text-center text-md font-semibold tracking-widest text-slate-100">
          Step into the Festive Season with Picky
        </h1>
      </div>
      <MaxWidth81>
        <div className="flex w-full justify-between py-2">
          <p>Picky Life</p>
          <div>
            <ul className="flex justify-center gap-4">
              <li>
                <a href="/logout" className="">
                  Logout
                </a>
              </li>
              <li>
                <a href="/about-us" className="">
                  About Us
                </a>
              </li>
              <li>
                <a href="/wishlist" className="">
                  My Wishlist
                </a>
              </li>
              <li>
                <a href="/cart" className="">
                  Cart
                </a>
              </li>
              <li>
                <a href="/compare" className="">
                  Compare (0)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidth81>
    </div>
  );
}
