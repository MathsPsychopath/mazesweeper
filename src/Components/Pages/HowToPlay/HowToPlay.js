import React, { useState } from "react";
import OptionButton from "../../Common/OptionButton";
import GoodVersion from "./GoodVersion";
import TDLR from "./TDLR";

/**
 *
 * @returns How-To but with option to change
 */
export default function HowToPlay() {
  const [isGoodSelected, changeSelected] = useState(true);
  return (
    <div className="grid mx-auto w-9/12 text-left mb-20 mt-8">
      <div className="p-4">
        <OptionButton
          currentState={isGoodSelected}
          updateState={changeSelected}
          updateValue={true}
        >
          Good version
        </OptionButton>
        <OptionButton
          currentState={!isGoodSelected}
          updateState={changeSelected}
          updateValue={false}
        >
          TL:DR
        </OptionButton>
      </div>
      {isGoodSelected && <GoodVersion />}
      {isGoodSelected || <TDLR />}
    </div>
  );
}
