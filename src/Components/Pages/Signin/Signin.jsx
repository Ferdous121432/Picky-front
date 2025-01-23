import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthProvider";
import Layout from "../../Utils/Layout";
import SignInForm from "./SignInForm";
import Divider from "./Divider";
import CreateAccountButton from "./CreateAccountButton";

export default function Signin() {
  const { state } = useAuth();
  return (
    <div>
      <Layout>
        {state.isAuthenticated && <Navigate to="/userprofile" />}
        <main className="m-auto mb-12 mt-6 flex w-full max-w-full flex-col items-center justify-start self-center">
          <SignInForm />
          <Divider text="New to our community" />
          <CreateAccountButton />
        </main>
      </Layout>
    </div>
  );
}
