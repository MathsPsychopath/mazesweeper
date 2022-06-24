import React, { useEffect, useState } from "react";
// import Statistic from "../../Common/Statistic";

export default function Leaderboard() {
  // const [length, setLength] = useState(25);
  // const [sortBy, setCondition] = useState("points");
  // const [filterBy, setPredicate] = useState("none");
  // const [playerName, setPlayerName] = useState("Enter username");
  // const [gridSize, setGridSize] = useState("none");
  // const [data, setData] = useState([]);
  useEffect(() => {});

  return (
    <div className="mx-auto py-8 px-auto rounded-md bg-white flex flex-col items-center">
      <h1 className="font-bold text-3xl my-2">Leaderboard</h1>
      <div className="m-2 w-full md:w-[40em] flex flex-wrap sm:flex-col gap-2 sm:gap-4"></div>
    </div>
  );
}
