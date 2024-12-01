import React from "react";
import MaxWidth81 from "../../Utils/MaxWidth81";

export default function BottomFotter() {
  return (
    <div className="bg-slate-900 py-3 text-slate-100">
      <MaxWidth81>
        <div className="flex justify-between">
          <p className="font-[400]">
            Copyright ©2024 Picky. All rights reserved
          </p>

          <p>
            <span>system design & developed by :</span>
            <span className="font-semibold uppercase text-slate-50">
              {" "}
              Ferdous
            </span>
          </p>
        </div>
      </MaxWidth81>
    </div>
  );
}
