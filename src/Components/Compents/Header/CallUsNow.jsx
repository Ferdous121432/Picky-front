import React from "react";
import CallIcon from "@mui/icons-material/Call";

export default function CallUsNow() {
  return (
    <div className="flex items-center gap-2">
      <CallIcon className=" " />
      <div className="flex flex-col leading-none">
        <p className="font-semibold">Call Us Now</p>
        <p>123-456-7890</p>
      </div>
    </div>
  );
}
