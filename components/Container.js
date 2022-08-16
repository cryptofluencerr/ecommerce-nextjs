import React from "react";
import Card from "./Card";
import data from "../utils/data";

function Container({ products }) {
  return (
    <div className="py-5">
      <h1 className="font-bold text-3xl truncate text-center">Products</h1>
      <div className="flex flex-wrap text-center mx-2 my-5">
        {products.map((detail) => (
          <div
            key={detail.image}
            className="w-full sm:w-1/3 xl:w-1/4 p-2  2xl:1/5 py-5 mx-auto "
          >
            <Card detail={detail} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Container;
