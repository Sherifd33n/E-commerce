import React from "react";
import Layout from "../Layout/Layout";
import SectionHead from "../Components/SectionHead";
import contactImg from "../../src/assets/contact_img.png";
import Button from "../Components/Button";
import Subscribe from "../Components/Home/Subscribe";

const Contact = () => {
  return (
    <>
      <Layout>
        <div className="mt-5">
          <SectionHead title="contact us" />
          <div>
            <div className="lg:flex gap-6 mt-6 items-center lg:gap-10">
              <div className="lg:w-[50%] ">
                <img
                  src={contactImg}
                  alt=""
                  className="lg:w-[500px] lg:h-[400px] mx-auto object-cover"
                />
              </div>
              <div className=" lg:w-[50%] text-sm  md:text-[0.93rem]">
                <p className="mt-6 font-bold text-[1.3rem] capitalize">
                  our store
                </p>
                <p className="mt-4 font-semibold">
                  54602 A town hall city <br />
                  Suite 13, Lagos, Nigeria.
                </p>

                <p className="mt-8 font-semibold">
                  <span className="font-bold">Tel:</span> +234 0000 0000 000
                </p>

                <p className="mt-2 font-semibold">
                  <span className="font-bold">Email:</span> sherifd33n@gmail.com
                </p>

                <p className="mt-8 font-bold text-[1.3rem]">
                  Careers at Forever.
                </p>

                <p className="mt-4 font-semibold">
                  Learn more about our teams and job openings.
                </p>

                <div className="mt-10">
                  <Button title="explore jobs" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Subscribe />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
