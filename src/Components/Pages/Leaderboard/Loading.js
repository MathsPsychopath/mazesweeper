import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="flex justify-center content-center text-3xl sm:m-8 animate-bounce ">
      <AiOutlineLoading3Quarters className="animate-spin" />
    </div>
  );
}
