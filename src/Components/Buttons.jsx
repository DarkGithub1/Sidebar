import React from "react";
import Data from "../Data";
import { FaCube } from "react-icons/fa6";
import { FaEllo } from "react-icons/fa6";
const Button = ({ menuItems, setItem, filerItems,open ,item}) => {
  return (
  <>
        {menuItems.map((val) => (
          <button
            className={`text-white  hover:bg-black  w-full   ${!open && "pl-2.5"}`}
            onClick={() => filerItems(val)}
          >
            {!open?<FaEllo/>:val}
          </button>
        ))}
        <button  className={`text-white   mx-auto hover:bg-black ${!open && "pl-2.5"}  w-full `}
          onClick={() => setItem(Data)}
        >
          {!open?<FaEllo/>:"All"}
        </button>
</>
  );
};

export default Button;
