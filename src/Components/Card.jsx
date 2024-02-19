import React from "react";
import { FaCartPlus } from "react-icons/fa6";
const Card = ({ item }) => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font w-full overflow-auto ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {item.map((val) => (
            <div key={val.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={val.img}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {val.category}
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  {val.title}
                </h2>
                <p className="mt-1"><span>&#8377;</span>{val.price}</p>
                <button className="text-white text-2xl relative left-60 bottom-12"><FaCartPlus/></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
