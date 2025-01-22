/* eslint-disable */
import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section className="flex w-full flex-col items-center bg-white px-20 pt-24 max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1058px] flex-col items-center max-md:max-w-full">
        <h2 className="text-4xl font-semibold text-black">
          Get In Touch With Us
        </h2>
        <p className="text-base mt-2 w-[644px] text-center text-neutral-400 max-md:max-w-full">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
        <div className="mt-3.5 self-stretch max-md:max-w-full">
          <div className="flex flex-col-reverse gap-5 md:flex-row">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
