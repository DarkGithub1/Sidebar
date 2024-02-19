import React from "react";
import { FaHouse } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
const Navbar = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font  flex justify-center">
      <div className="container flex flex-wrap p-5 items-center justify-center  border-red-600">
        
        <nav className=" flex flex-wrap items-center w-2/4 text-base justify-around ">
          <a className="mr-5 text-xl flex  justify-center items-center  text-white  hover:text-gray-300"><FaHouse/><span className="ml-4">Home</span></a>
          <a className="mr-5 text-xl flex  justify-center items-center  text-white  hover:text-gray-300"><FaAddressCard/><span className="ml-4">About</span></a>
          <a className="mr-5 text-xl flex  justify-center items-center  text-white  hover:text-gray-300"><FaPhone /><span className="ml-4">Contact</span></a>
          <button className="text-white text-xl ml-14 bg-dark-purple w-20 rounded-md hover:bg-black  ">Login</button>
          <button className="text-white text-xl ml-14 bg-dark-purple w-20 rounded-md hover:bg-black  ">Signup</button>
        </nav>
        
       
      </div>
    </header>
  );
};

export default Navbar;
