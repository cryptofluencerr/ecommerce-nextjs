import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "../utils/data";
import { ShoppingCartIcon } from "@heroicons/react/solid";

function Container({ products }) {
  return (
    <div className="py-5">
      <h1 className="font-bold text-3xl truncate text-center">Products</h1>
      <div className="flex flex-wrap text-center mx-2 my-5">
        {products.map((detail) => (
          <div
            key={detail.image}
            className="w-1/2 sm:w-1/3 lg:w-1/4 p-2  2xl:1/5 py-5 mx-auto "
          >
            <Link href={`/product/${detail.slug}`}>
              <Image
                className="rounded-lg object-cover cursor-pointer"
                src={detail.image}
                width={500}
                height={500}
                alt={detail.name}
              />
            </Link>

            <div className="sm:text-start text-oncenter sm:pl-3 font-medium leading-relaxed">
              <span className="cursor-pointer text-lg">{detail.name}</span>
              <span className="flex flex-col sm:flex-row sm:justify-between justify-center items-center sm:pr-5 sm:pt-2 font-medium">
                ₹ {detail.price}{" "}
                <span className="bg-[#f0c000] px-3 py-1 mt-2 sm:mt-0 rounded-full h-7 w-11 cursor-pointer">
                  <ShoppingCartIcon className="h-5 w-5" />
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Container;
