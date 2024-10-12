import React from "react";
import SectionHead from "../SectionHead";
import LatestProduct from "./LatestProduct";

const LatestCollection = () => {
  return (
    <div className="mt-20">
      <SectionHead
        title="latest collection"
        titleDesc="A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom"
      />

      <LatestProduct />
    </div>
  );
};

export default LatestCollection;
