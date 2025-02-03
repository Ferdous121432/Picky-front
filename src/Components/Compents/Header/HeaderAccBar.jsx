import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useAuth } from "../../../context/AuthProvider";

export default function HeaderAccBar() {
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
    <div className="flex items-center justify-end lg:gap-6">
      <Link to="/userprofile">
        <PersonIcon />
      </Link>
      <Link to="/favorites">
        <FavoriteBorderIcon />
      </Link>
      <Link to="/cart">
        <ShoppingCartIcon />
      </Link>
    </div>
  );
}
