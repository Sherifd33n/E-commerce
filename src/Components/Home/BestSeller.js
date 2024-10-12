import React from "react";
import SectionHead from "../SectionHead";

import BestProduct from "../BestProduct";

const BestSeller = () => {
  return (
    <>
      <div className="mt-24">
        <SectionHead
          title="best sellers"
          titleDesc="A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom"
        />
        <div className="flex flex-wrap gap-4 justify-center mx-auto">
          <BestProduct />
        </div>
      </div>
    </>
  );
};

export default BestSeller;
