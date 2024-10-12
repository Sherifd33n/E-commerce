import React from "react";
import Layout from "../Layout/Layout";
import SectionHead from "../Components/SectionHead";
import Input from "../Components/Input";
import { Link } from "react-router-dom";
import Button from "../Components/Button";

const SignUp = () => {
  return (
    <>
      <Layout>
        <div className="md:w-[500px] mx-auto  text-center mt-10">
          <div className="md:h-[50vh] my-auto md:py-20">
            <SectionHead title="sign up" />

            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <Input type="text" placeholder="Full Name" />
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
                <p className="text-sm">
                  Have and account?
                  <Link
                    to="/login"
                    className=" text-blue-500 ml-2 hover:text-black"
                  >
                    Login Here
                  </Link>
                </p>
              </div>
              <div className="mt-6 ">
                <Button title="sign up" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SignUp;
