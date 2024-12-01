import React from "react";
import FooterContact from "./FooterContact";
import FooterCard from "./FooterCard";

const knowUs = [
  { id: 1, name: "Who we are", link: "/who-we-are" },
  { id: 2, name: "picky Club", link: "/picky-club" },
  { id: 3, name: "Brand Social Responsibilities (BSR)", link: "/bsr" },
  { id: 4, name: "Join Us", link: "/join-us" },
  { id: 5, name: "Pizza Hut Campaign", link: "/pizza-hut-campaign" },
];
const shoppingInfo = [
  { id: 1, name: "Privacy Policy Page", link: "/privacy-policy" },
  { id: 2, name: "Size Guide", link: "/size-guide" },
  { id: 3, name: "How to Shop", link: "/how-to-shop" },
  { id: 4, name: "Digital Gift Voucher T&C", link: "/gift-voucher-terms" },
];
const serviceInfo = [
  { id: 1, name: "Return and Exchange", link: "/return-exchange" },
  { id: 2, name: "Shipping & Charges", link: "/shipping-charges" },
  { id: 3, name: "Customer Service", link: "/customer-service" },
  { id: 4, name: "Terms and Conditions", link: "/terms-conditions" },
  { id: 6, name: "Store Locator", link: "/store-locator" },
];

export default function TopFooter() {
  return (
    <div className="flex w-full justify-around bg-slate-800 px-6 py-16 text-start lg:gap-10">
      <FooterContact />
      <FooterCard title="Know Us" items={knowUs} />
      <FooterCard title="shopping information" items={shoppingInfo} />
      <FooterCard title="SERVICE INFORMATION" items={serviceInfo} />
    </div>
  );
}
