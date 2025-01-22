import React from "react";
import Layout from "../../Utils/Layout";
import SignupForm from "./SignupForm";

export default function Signup() {
  return (
    <Layout>
      <main className="m-auto my-6 flex w-full items-start justify-center">
        <section className="flex w-4/5 max-w-[700px] overflow-hidden rounded-3xl border border-solid border-stone-500 border-opacity-50 bg-white pb-14">
          <div className="flex w-full min-w-[320px] justify-center">
            <SignupForm />
          </div>
        </section>
      </main>
    </Layout>
  );
}
