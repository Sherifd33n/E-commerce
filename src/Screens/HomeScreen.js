import React from "react";
import Layout from "../Layout/Layout";
import Latest from "../Components/Home/Latest";
import LatestCollection from "../Components/Home/LatestCollection";
import BestSeller from "../Components/Home/BestSeller";
import Exchange from "../Components/Home/Exchange";
import Subscribe from "../Components/Home/Subscribe";


const HomeScreen = () => {
  return (
    <Layout>
  
      <div>
        <Latest />
        <LatestCollection />
        <BestSeller />
        <Exchange />
        <Subscribe />
      </div>
    </Layout>
  );
};

export default HomeScreen;
