import React from "react";
import { useContext } from "react";
import { Store } from "../utils/Store";

function DarkModeSwitch() {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;

  return (
    <>
      <style jsx>
        {`
          .toggle-checkbox:checked {
            @apply: right-0 border-green-400;
            right: 0;
            border-color: #68d391;
          }
          .toggle-checkbox:checked + .toggle-label {
            @apply: bg-green-400;
            background-color: #68d391;
          }
        `}
      </style>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          onChange={(e) => {
            dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
            console.log(darkMode);
          }}
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        />
        <label
          htmlFor="toggle"
          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
    </>
  );
}

export default DarkModeSwitch;
