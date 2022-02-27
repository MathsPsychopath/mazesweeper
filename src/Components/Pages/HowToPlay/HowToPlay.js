import React, { useState } from "react";
import GoodVersion from "./GoodVersion";
import TDLR from "./TDLR";

export default function HowToPlay() {
  const [isGoodSelected, changeSelected] = useState(true);
  return (
    <div className="grid mx-auto w-9/12 text-left mb-20 mt-8">
      <div className="p-4">
        <button
          onClick={() => changeSelected(true)}
          className={`p-2 border border-black rounded-lg ${
            isGoodSelected && "bg-blue-100"
          }`}
        >
          Good version
        </button>
        <button
          onClick={() => changeSelected(false)}
          className={`p-2 border border-black rounded-lg ml-1 ${
            isGoodSelected || "bg-blue-100"
          }`}
        >
          TL:DR
        </button>
      </div>
      {isGoodSelected && <GoodVersion />}
      {isGoodSelected || <TDLR />}
    </div>
  );
}
