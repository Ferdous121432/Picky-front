import React from "react";
import Button from "./Button/Button";
import Constants from "../../../constants";

const LoginAgain = () => {
  return (
    <div className="mx-12 my-24 flex flex-col items-center justify-center gap-6">
      <h1>You are not logged in</h1>
      <p>Please log in to continue.</p>
      <Button
        color={Constants.YELLOW_PRIMARY}
        handleClick={() => (window.location.href = "/signin")}
      >
        Go to Login
      </Button>
    </div>
  );
};

export default LoginAgain;
