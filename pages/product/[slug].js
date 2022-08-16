import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import data from "../../utils/data";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Product from "../../utils/models/Product";
import db from "../../utils/db";
import { useContext } from "react";
import { Store } from "../../utils/Store";

function ProductScreen({ product }) {
  const { state } = useContext(Store);
  const { darkMode } = state;
  const router = useRouter();

  // const { slug } = router.query;

  // const product = data.find((a) => a.slug == slug);
  // console.log(product);

  if (!product) {
    return <div>Product Not Found!</div>;
  }

  return (
    <div
      className={
        darkMode
          ? `flex flex-col justify-center sm:justify-around sm:flex-row py-8 pb-10 
        sm:px-10 px-5 text-start sm:space-x-5 space-y-8 bg-gray-900 text-white`
          : `flex flex-col justify-center sm:justify-around sm:flex-row py-8 pb-10 
        sm:px-10 px-5 text-start sm:space-x-5 space-y-8`
      }
    >
      <div className="flex flex-col text-start">
        <span className="cursor-pointer text-[#f0c000] font-bold text-lg pb-3">
          <Link href="/">
            <a>back to products</a>
          </Link>
        </span>
        <Image
          src={product.image}
          width={400}
          height={400}
          alt="image"
          className="object-contain rounded-lg"
        />
      </div>
      <div
        className="flex flex-col font-medium leading-relaxed 
        sm:w-1/4 sm:pl-5"
      >
        <p className="text-2xl font-bold py-2 pb-2">{product.name}</p>
        <p>Category: {product.category}</p>
        <p>Brand: {product.brand}</p>
        <p>Ratings: {product.ratings}</p>
        <p>Description: {product.description}</p>
      </div>
      <div
        className={
          darkMode
            ? `flex flex-col font-medium space-y-5 p-2 
        leading-relaxed border-b-2 sm:w-1/3 h-1/2 bg-gray-800 text-white`
            : `flex flex-col font-medium space-y-5 p-2 
        leading-relaxed border-b-2 sm:w-1/3 h-1/2 bg-white`
        }
      >
        <div className="flex flex-col ">
          <span> Price: ₹ {product.price}</span>
          <span>
            {" "}
            Status: {product.countInStock > 0 ? "In-Stock" : "Out-of-Stock"}
          </span>
        </div>
        <div className="bg-[#f0c000] w-full py-2  text-center cursor-pointer rounded-lg">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductScreen;

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}
