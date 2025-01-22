/* eslint-disable */
import React from "react";

import Layout from "../../Utils/Layout";
import HeroImage from "./HeroImage";
import ContactSection from "./ContactSection";

function ContactUs() {
  return (
    <Layout>
      <div className="mb-10 flex flex-col overflow-hidden bg-white">
        <HeroImage />
        <ContactSection />
      </div>
    </Layout>
  );
}

export default ContactUs;
