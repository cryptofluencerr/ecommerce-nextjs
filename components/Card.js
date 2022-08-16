import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/solid";

function Card({ detail }) {
  return (
    <div>
      <a href={`/product/${detail.slug}`}>
        <Image
          className="rounded-lg object-cover cursor-pointer"
          src={detail.image}
          width={500}
          height={500}
          alt={detail.name}
        />
      </a>

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
  );
}

export default Card;