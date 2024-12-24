import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import TopHeader from "./TopHeader";
import HeaderAccBar from "./HeaderAccBar";
import CallUsNow from "./CallUsNow";
import MaxWidth81 from "../../Utils/MaxWidth81";

export default function MiddleHeader() {
  return (
    <div className="flex justify-center bg-slate-300">
      <MaxWidth81>
        <div className="flex gap-[5rem] py-4">
          <Logo />
          <div className="flex w-full justify-start lg:gap-10">
            <SearchBar />
            <div className="flex w-full justify-end gap-10">
              <CallUsNow />
              <HeaderAccBar />
            </div>
          </div>
        </div>
      </MaxWidth81>
    </div>
  );
}
