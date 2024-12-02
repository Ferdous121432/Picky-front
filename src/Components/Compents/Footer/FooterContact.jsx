import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function FooterContact() {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-left font-bold uppercase tracking-wide text-slate-200 lg:text-lg">
          CONTACT INFO
        </h1>
      </div>
      <div className="flex flex-col gap-2 text-left text-slate-100">
        <p>234 Street Name, City Name, United States</p>
        <p>Phone: +123 456 7890</p>
        <p>
          <Link to="#" className="text-slate-100 hover:text-slate-200">
            hello@picky.com
          </Link>
        </p>
      </div>
      <div className="flex gap-x-2 pt-1">
        <Link to="#" target="_blank">
          <FacebookIcon className="text-slate-100 hover:text-slate-200" />
        </Link>
        <Link to="#" target="_blank">
          <InstagramIcon className="text-slate-100 hover:text-slate-200" />
        </Link>
        <Link to="#" target="_blank">
          <TwitterIcon className="text-slate-100 hover:text-slate-200" />
        </Link>
        <Link to="#" target="_blank">
          <LinkedInIcon className="text-slate-100 hover:text-slate-200" />
        </Link>
      </div>
    </div>
  );
}
