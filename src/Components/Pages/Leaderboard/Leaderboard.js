import React, { useState } from "react";
import Statistic from "../Results/Statistic";
import SearchParameters from "./SearchParameters";
import SuspenseStatistic from "./SuspenseStatistic";

export default function Leaderboard() {
  const [data, setData] = useState([]);

  return (
    <div className="mx-auto text-left py-8 px-auto rounded-md bg-white flex flex-col items-center">
      <h1 className="font-bold text-3xl my-2">Leaderboard</h1>
      <SearchParameters setData={setData} />
      {/**filter by grid size, playername (sanitise on backend) */}
      <SuspenseStatistic />
      <Statistic gameData="thing" statistic="7" />
    </div>
  );
}
