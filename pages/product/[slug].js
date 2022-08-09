import React from "react";
import { useRouter } from "next/router";
import data from "../../utils/data";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function ProductScreen() {
  const router = useRouter();

  const { slug } = router.query;

  const product = data.find((a) => a.id == slug);
  console.log(product);

  if (!product) {
    return <div>Product Not Found!</div>;
  }

  return (
    <div>
      <Navbar />
      <div
        className="flex flex-col justify-center sm:justify-around sm:flex-row py-8 mb-10 
        px-10 mx-5 text-start sm:space-x-5 space-y-5 "
      >
        <div className="flex flex-col text-start">
          <span
            onClick={() => router.push("/")}
            className="cursor-pointer text-[#f0c000] font-bold text-lg"
          >
            back to products
          </span>
          <Image
            src={product.image}
            width={400}
            height={400}
            alt="image"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="flex flex-col font-medium py-2 leading-relaxed sm:w-1/3 sm:pl-5">
          <p className="text-2xl font-bold py-4">{product.name}</p>
          <p>Category: {product.category}</p>
          <p>Brand: {product.brand}</p>
          <p>Ratings: {product.ratings}</p>
          <p>Description: {product.description}</p>
        </div>
        <div
          className="flex flex-col font-medium space-y-5 p-3 
        leading-relaxed border-b-2 sm:w-1/3 h-1/2 bg-white"
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
      <Footer />
    </div>
  );
}

export default ProductScreen;
