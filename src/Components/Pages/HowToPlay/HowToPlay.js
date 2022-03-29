import React, { useState } from "react";
import OptionsList from "../../Common/OptionsList";
import GoodVersion from "./GoodVersion";
import TLDR from "./TLDR";

/**
 *
 * @returns How-To but with option to change
 */
export default function HowToPlay() {
  const [isGoodSelected, changeSelected] = useState("Good version");
  return (
    <div className="grid mx-auto w-9/12 text-left mb-20 mt-8">
      <div className="p-4">
        <OptionsList
          setState={changeSelected}
          state={isGoodSelected}
          updateValues={["Good version", "TL:DR"]}
        />
      </div>
      {isGoodSelected === "Good version" && <GoodVersion />}
      {isGoodSelected === "TL:DR" && <TLDR />}
    </div>
  );
}
