import React, { useState, useMemo } from "react";
import { AiOutlineLoading } from "react-icons/ai";

const styles =
  "flex items-center justify-center text-lg p-4 w-1/3 m-2 text-white " +
  "rounded-lg border ";

export default function AsyncButton({
  asyncCallback,
  callbackParams,
  children,
}) {
  const [state, setState] = useState("idle");
  const handleClick = useMemo(
    () => async () => {
      setState("loading");
      await asyncCallback(...callbackParams).then(setState("idle"));
    },
    [setState, asyncCallback, callbackParams]
  );

  if (state === "loading") {
    return (
      <button className={styles + "bg-gray-400"} disabled>
        <div className="animate-spin">
          <AiOutlineLoading />
        </div>
      </button>
    );
  }
  return (
    <button
      className={
        styles + "bg-blue-400 hover:bg-purple-200 active:bg-purple-400"
      }
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
}
