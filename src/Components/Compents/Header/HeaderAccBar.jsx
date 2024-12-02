import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function HeaderAccBar() {
  return (
    <div className="flex items-center justify-end lg:gap-6">
      <PersonIcon />
      <FavoriteBorderIcon />
      <ShoppingCartIcon />
    </div>
  );
}
