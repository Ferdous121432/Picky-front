/* eslint-disable */
import React from "react";
import Layout from "../../Utils/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto mb-10 w-full p-4">
        <h1 className="w-full p-2 text-center text-4xl font-bold text-slate-800">
          About Us
        </h1>
        <p className="py-2">
          Welcome to Shopperoo! We are dedicated to providing the best shopping
          experience.
        </p>
        <p>
          Our mission is to offer a wide variety of products at competitive
          prices.
        </p>
        <p>Thank you for choosing Shopperoo!</p>
      </div>
    </Layout>
  );
};

export default About;
