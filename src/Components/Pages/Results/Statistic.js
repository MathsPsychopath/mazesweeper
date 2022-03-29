import React from "react";

export default function Statistic(props) {
  return (
    <div
      className={
        "rounded-md w-full flex p-4 border-purple-500 border-b-4 " +
        "border-l-4 bg-white flex flex-col bg-gray-50"
      }
    >
      <h1>{props.gameData}</h1>
      <p className="text-gray-400">{props.statistic}</p>
    </div>
  );
}
