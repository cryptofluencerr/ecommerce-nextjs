import React from "react";
import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import DarkModeSwitch from "./DarkModeSwitch";

function Navbar() {
  return (
    <div
      className="sm:flex-row p-2 pt-3 sm:pt-2 flex flex-col items-center relative
      justify-between bg-[#203040] w-full truncate"
    >
      <Link href="/">
        <a className="sm:mx-4 flex font-bold text-white hover:underline">
          <h2 className="text-2xl">ZICOA</h2>
        </a>
      </Link>
      <nav className=" sm:inline-flex sm:mx-5 text-gray-400">
        <div className="p-2 text-xl">
          <DarkModeSwitch />
          <Link href="/login">
            <a className="sm:mx-6 mr-6 hover:underline hover:text-white">
              Login
            </a>
          </Link>
          <Link href="/cart">
            <a className=" hover:text-white hover:underline inline-flex">
              Cart <ShoppingCartIcon className="h-8 w-5 mx-1" />
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
