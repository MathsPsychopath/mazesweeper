import React from "react";

export default function SuspenseStatistic() {
  return (
    <div
      className={
        "rounded-md flex h-80 sm:w-[40em] sm:h-24 border-purple-500 border-b-4 " +
        "border-l-4 bg-slate-50 flex-col pt-3 mx-auto"
      }
    >
      <div className="flex flex-col gap-2 sm:flex-row justify-evenly justify-items-center">
        <div className="w-20 h-12 mx-2 animate-pulse rounded-2xl duration-200 bg-gray-400"></div>
        <div className="w-20 h-12 mx-2 animate-pulse rounded-2xl duration-200 bg-gray-400"></div>
        <div className="w-20 h-12 mx-2 animate-pulse rounded-2xl duration-200 bg-gray-400"></div>
        <div className="w-20 h-12 mx-2 animate-pulse rounded-2xl duration-200 bg-gray-400"></div>
        <div className="w-20 h-12 mx-2 animate-pulse rounded-2xl duration-200 bg-gray-400"></div>
      </div>
      <div className="bg-gray-300 w-3/12 p-1.5 m-2 mx-4 animate-pulse rounded-full duration-200"></div>
    </div>
  );
}
