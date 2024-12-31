import React from "react";
import Layout from "../../Utils/Layout";
import ProductImages from "./ProductImages";
import ProductHeaderDetails from "./ProductHeaderDetails";

export default function () {
  return (
    <div>
      <Layout>
        <div>
          <div className="flex gap-4">
            <ProductImages />
            <ProductHeaderDetails />
          </div>
          <div></div>
        </div>
      </Layout>
    </div>
  );
}
