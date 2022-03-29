import React from "react";

export default function SuspenseStatistic() {
  return (
    <div
      className={
        "rounded-md flex w-9/12 md:w-[40em] h-16 border-purple-500 border-b-4 " +
        "border-l-4 bg-white flex flex-col bg-gray-50 pt-3"
      }
    >
      <div className="bg-gray-300 p-1.5 m-1 mx-4 animate-pulse rounded-full duration-200"></div>
      <div className="bg-gray-300 w-3/12 p-1.5 m-1 mx-4 animate-pulse rounded-full duration-200"></div>
    </div>
  );
}
