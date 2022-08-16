import React, { useContext } from "react";
import { Store } from "../utils/Store";

function Footer() {
  const { state } = useContext(Store);
  const { darkMode } = state;
  return (
    <div className={darkMode && `bg-gray-900 text-white`}>
      <div className="container w-full bottom-0 text-center pb-5">
        <div className="font-medium ">All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
