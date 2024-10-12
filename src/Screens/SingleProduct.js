import React from "react";
import Layout from "../Layout/Layout";
import { AllWear } from "../Data/Data";
import { useParams } from "react-router-dom";
import ProductInfo from "../Components/Single/ProductInfo";
import Product from "../Components/Product";

const SingleProduct = () => {
  const { id } = useParams();
  const product = AllWear.find((product) => product.name === id);

  const RelatedProducts = AllWear.filter(
    (p) => p.category === product.category
  );

  return (
    <Layout>
      <ProductInfo product={product} />

      <div>
        <p className="capitalize text-3xl mt-20 font-semibold">
          related products
        </p>
        <div className="flex flex-wrap gap-3 mx-auto justify-between">
          {RelatedProducts.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
