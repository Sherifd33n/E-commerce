import React from "react";
import Layout from "../Layout/Layout";
import SectionHead from "../Components/SectionHead";
import Input from "../Components/Input";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

const Login = () => {
  return (
    <>
      <Layout>
        <div className="md:w-[500px] mx-auto  text-center mt-10">
          <div className="md:h-[50vh] my-auto md:py-20">
            <SectionHead title="login" />
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
              </div>
              <div className="flex justify-between">
                <Link
                  to="/forgot-password"
                  className="text-sm text-red-500 hover:text-black"
                >
                  Forgot password?
                </Link>
                <Link
                  to="/sign-up"
                  className="text-sm text-blue-500 hover:text-black"
                >
                  Create account
                </Link>
              </div>
              <div className="mt-6">
                <Button title="sign in" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
