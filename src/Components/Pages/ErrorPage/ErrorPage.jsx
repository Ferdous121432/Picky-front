/* eslint-disable */
import React from "react";
import BackToHomeButton from "./BackToHomeButton";
import DecorativeElements from "./DecorativeElements";
import Layout from "../../Utils/Layout";

function ErrorPage() {
  return (
    <Layout>
      <main className="flex flex-col overflow-hidden bg-white">
        <section className="flex w-full flex-col items-center justify-center bg-white px-10 py-10 max-md:max-w-full max-md:px-5 max-md:py-10">
          <div className="-mb-9 flex w-full max-w-[989px] flex-col items-center max-md:mb-2.5 max-md:max-w-full">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-5xl ml-8 mt-16 font-extrabold leading-none text-slate-700 max-md:mt-10 max-md:max-w-full">
                Oops, This Page Could Not Be Found.
              </h1>
              <p className="ml-7 mt-8 text-center text-2xl font-medium leading-9 text-slate-600 max-md:max-w-full">
                The page you are looking for might have been removed had its{" "}
                <br /> name changed or is temporarily unavailable.
              </p>
              <BackToHomeButton />
            </div>
            <DecorativeElements />
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ErrorPage;
