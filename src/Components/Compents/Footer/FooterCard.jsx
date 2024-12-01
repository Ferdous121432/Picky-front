import React from "react";
import { Link } from "react-router-dom";

export default function FooterCard({ title, items }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-left font-bold uppercase tracking-wide text-slate-200 lg:text-lg">
        {title}{" "}
      </h1>
      <ul className="flex flex-col gap-2 text-left text-slate-100">
        {items.map((item) => (
          <li key={item.id}>
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
