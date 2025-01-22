import { useForkRef } from "@mui/material";
import React, { useEffect } from "react";
import { getOrdersByUser } from "../../../hooks/order";
import { useAuth } from "../../../context/AuthProvider";
import { Link } from "react-router-dom";

export default function UserOrders({ orders }) {
  return (
    <div className="flex min-w-[550px] flex-col gap-2 border-2 border-slate-400 px-5 py-10">
      <div className="flex flex-row justify-between">
        <h1 className="font-semibold text-slate-950">Order ID</h1>
        <h1 className="font-semibold text-slate-950">Order Date</h1>
        <h1 className="font-semibold text-slate-950">Amount</h1>
        <h1 className="font-semibold text-slate-950">Status</h1>
        <h1 className="font-semibold text-slate-950">Invoice</h1>
      </div>
      <div className="relative py-1">
        <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-100 bg-yellow-primary"></span>
      </div>
      <div>
        {orders.length === 0 ? (
          <div>No orders</div>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="flex flex-row justify-between py-2">
              <h1 className="font-semibold text-slate-950">
                {order._id.slice(-8)}
              </h1>
              <h1 className="font-semibold text-slate-950">
                {new Date(order.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </h1>
              <h1 className="font-semibold text-slate-950">
                {order.total_price}
              </h1>
              <h1
                className={
                  order.status === "delivered"
                    ? "font-semibold text-emarald-primary"
                    : "font-semibold text-slate-950"
                }
              >
                {order.status}
              </h1>
              <Link
                to={order.invoice_pdf}
                className="font-semibold text-slate-950"
              >
                Invoice
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
