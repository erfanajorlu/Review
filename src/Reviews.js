import React, { useState } from "react";
import people from "./data";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = people[index];

  return (
    <article className="h-3/5 w-3/6">
      <div className="mt-6 h-full mx-auto flex flex-col items-center bg-white rounded-lg border show">
        <img className="w-28 h-28 rounded-full my-4" src={image} alt={name} />
        <h4 className="font-bold text-xl">{name}</h4>
        <p className="mt-2 text-blue-500">{job}</p>
        <p className="mt-4 font-semibold text-md w-11/12 text-slate-500 text-center">{text}</p>
      </div>
    </article>
  );
};

export default Reviews;
