import React from "react";
import Button from "./Button/Button";
import Constants from "../../../constants";
import Layout from "../Utils/Layout";

const LoginAgain = () => {
  return (
    <Layout>
      <div className="mx-12 my-24 flex flex-col items-center justify-center gap-6">
        <h1>You are not logged in</h1>
        <p>Please log in to continue.</p>
        <Button
          hover="hover:bg-slate-800 hover:font-bold  hover:text-slate-200  "
          color="text-slate-50 bg-slate-900 lg:max-w-[800px] w-full "
          handleClick={() => (window.location.href = "/signin")}
        >
          Go to Login
        </Button>
      </div>
    </Layout>
  );
};

export default LoginAgain;
