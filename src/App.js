import React from "react";
import Reviews from "./Reviews";

function App() {
  return (
    <div className="flex flex-col justify-center items-center my-auto h-screen bg-slate-200">
      <h1 className="text-3xl font-extrabold my-6">Our Reviews</h1>
      <div className="w-32 h-1 bg-blue-800"></div>
      <Reviews />
    </div>
  );
}

export default App;
