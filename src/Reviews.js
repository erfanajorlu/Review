import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = people[index];

  return (
    <article className="mt-6 flex flex-col items-center h-3/5 w-3/6 bg-white rounded-lg border shadow-lg">
      <div className=" mx-auto  flex flex-col items-center">
        <img className="w-28 h-28 rounded-full my-4" src={image} alt={name} />
        <h4 className="font-bold text-xl">{name}</h4>
        <p className="mt-2 text-blue-500">{job}</p>
        <p className="mt-4 font-semibold text-md w-11/12 text-slate-500 text-center">
          {text}
        </p>
      </div>
      <div className="text-center mt-8 ">
        <button className="text-blue-500 text-lg mx-4">
          <FaChevronLeft />
        </button>
        <button className="text-blue-500 text-lg mx-4">
          <FaChevronRight />
        </button>
      </div>
      <button className="border bg-blue-100 text-center mx-auto mt-2 text-sm px-2 py-2 rounded-lg font-semibold text-blue-700 hover:bg-blue-700 hover:text-blue-100">
        Suprise Me
      </button>
    </article>
  );
};

export default Reviews;
