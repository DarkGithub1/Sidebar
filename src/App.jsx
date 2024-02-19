import React, { useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Data from "./Data";
import Button from "./Components/Buttons";
import Footer from "./Components/Footer";
import { FaEdge } from "react-icons/fa6";
const App = () => {
  const [open, setOpen] = useState(true);
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((val) => val.category))];

  //Fitering

  const filerItems = (cat) => {
    const newItems = Data.filter((newval) => newval.category === cat);
    console.log(newItems);
    setItem(newItems);
  };
  return (
    <>
      <div className="flex">
        <div
          className={`bg-gray-900 h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } duration-300 relative`}
        >
          <BsArrowLeftShort
            className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex ">
            <FaEdge
              className={`text-white text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${
                open && "rotate-[360deg]"
              } `}
            />
            <h1
              className={`text-white origin-left duration-300 font-medium text-2xl ${
                !open && "scale-0"
              }`}
            >
              E-commerce
            </h1>
          </div>
          <div
            className={`flex items-center ${
              !open ? "px-2.5" : "px-4"
            } rounded-md bg-light-white mt-6 px-4 py-2`}
          >
            <BsSearch
              className={`text-white text-lg ${
                open && "mr-2"
              }  block float-left mr-2 cursor-pointer `}
            />
            <input
              type={"search"}
              className={`text-base bg-transparent w-full text-white focus:outline-none ${
                !open && "hidden"
              }`}
              placeholder="Search"
            />
          </div>
          <div className="flex flex-col h-2/3 justify-around mt-5">
            <Button
              menuItems={menuItems}
              filerItems={filerItems}
              setItem={setItem}
              open={open}
              item={item}
            />
          </div>
        </div>
        <div className="w-full h-screen flex flex-col ">
          <Navbar />
          <Card item={item}/>
          <div className="min-h-20 bg-gray-900 flex justify-center items-center">
              <p className="text-white text-xl "> @Sonu Kumar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
