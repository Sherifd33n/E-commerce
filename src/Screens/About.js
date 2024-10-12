import React from "react";
import Layout from "../Layout/Layout";
import aboutImg from "../../src/assets/about_img.png";
import SectionHead from "../Components/SectionHead";
import AboutCard from "../Components/AboutCard";

const About = () => {
  return (
    <>
      <Layout>
        <div className="mt-5">
          <SectionHead title="about us" />
          <div className="lg:flex gap-6 lg:gap-10 mt-6 items-center">
            <div className="lg:w-[50%] ">
              <img
                src={aboutImg}
                alt=""
                className="lg:w-[500px] lg:h-[400px] mx-auto object-cover"
              />
            </div>

            <div className=" lg:w-[50%] text-sm  md:text-[0.93rem]">
              <p className="mt-4 lg:mt-0">
                A town hall different from bala blu, blue blu bulaba. broom
                broom broom brooooooooom. Bala blu blue blu bulaba. A town hall
                different from bala blu, blue blu bulaba. broom broom broom
                brooooooooom. Bala blu blue blu bulaba.
              </p>
              <p className="mt-4">
                A town hall different from bala blu, blue blu bulaba. broom
                broom broom brooooooooom. Bala blu blue blu bulaba. The farmers
                will make more money. Your lunch will not be imported, cassava
                garri ewa and ehhh ehhhhnn. The farmer will make money, the
                dinner would be cassava, eba, ewa and everything.
              </p>
              <p className="mt-4">
                A town hall different from bala blu, blue blu bulaba. broom
                broom broom brooooooooom. Bala blu blue blu bulaba. A town hall
                different from bala blu, blue blu bulaba. broom broom broom
                brooooooooom. Bala blu blue blu bulaba.
              </p>
              <p className="mt-6 font-bold text-[1.3rem] capitalize">
                our mission
              </p>
              <p className="mt-4">
                A town hall different from bala blu, blue blu bulaba. broom
                broom broom brooooooooom. Bala blu blue blu bulaba.{" "}
              </p>
            </div>
          </div>
          <div className="mt-12">
            <SectionHead title="why choose us" />
            <div className="flex flex-row justify-center flex-wrap gap-5 mt-4">
              <AboutCard
                title="quality product"
                text="A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu.
                "
              />

              <AboutCard
                title="convenience"
                text="A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu.
                "
              />

              <AboutCard
                title="exceptional customer service"
                text="A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu.
                "
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
