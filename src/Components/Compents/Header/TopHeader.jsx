import React from "react";
import MaxWidth81 from "../../Utils/MaxWidth81";
import { useAuth } from "../../../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export default function TopHeader() {
  const { state, dispatch, logout } = useAuth();

  const location = useLocation();
  console.log(location.pathname);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    window.location.href =
      location.pathname !== "/userprofile"
        ? Navigate("/")
        : Navigate("/signin");
  };

  if (!state.isAuthenticated && location.pathname === "/userprofile") {
    return <Navigate to="/signin" />;
  }

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
              <li className="hover:cursor-pointer hover:font-semibold hover:text-slate-950">
                {state.isAuthenticated ? (
                  <div onClick={handleLogout}>Logout</div>
                ) : (
                  <div>
                    <a href="/signin">Log in</a>
                  </div>
                )}
              </li>
              <li>
                <a href="/about-us" className="">
                  About Us
                </a>
              </li>
              <li>
                <a href="/favorites" className="">
                  My Wishlist
                </a>
              </li>
              <li>
                <a href="/cart" className="">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidth81>
    </div>
  );
}
