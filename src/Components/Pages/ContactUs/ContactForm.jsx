/* eslint-disable */
import React from "react";
import Button from "../../Compents/Button/Button";

function ContactForm() {
  return (
    <div className="ml-5 flex w-[62%] flex-col max-md:ml-0 max-md:w-full">
      <form className="text-base flex w-full grow flex-col items-start bg-white px-8 pb-8 pt-12 text-black">
        <label htmlFor="name" className="font-medium">
          Your name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Abc"
          className="mt-6 self-stretch whitespace-nowrap rounded-xl border border-solid border-neutral-400 bg-white px-8 py-7 text-neutral-400 max-md:max-w-full max-md:px-5"
        />

        <label htmlFor="email" className="mt-9 font-medium">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Abc@def.com"
          className="mt-6 self-stretch whitespace-nowrap rounded-xl border border-solid border-neutral-400 bg-white px-8 py-7 text-neutral-400 max-md:max-w-full max-md:px-5"
        />

        <label htmlFor="subject" className="mt-9 font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          placeholder="This is an optional"
          className="mt-6 self-stretch rounded-xl border border-solid border-neutral-400 bg-white px-8 py-7 text-neutral-400 max-md:max-w-full max-md:px-5"
        />

        <label htmlFor="message" className="mt-9 font-medium">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Hi! i'd like to ask about"
          className="mt-6 self-stretch rounded-xl border border-solid border-neutral-400 bg-white px-8 pb-16 pt-7 text-neutral-400 max-md:mr-1 max-md:max-w-full max-md:px-5"
        ></textarea>

        <div className="mt-8 w-full">
          <Button
            width="full"
            hover="hover:bg-slate-800 hover:font-bold  hover:text-slate-200  "
            color="text-slate-50 bg-slate-900"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
