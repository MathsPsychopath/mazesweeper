import React, { useEffect, useState } from "react";
import Entry from "../../Common/Entry";
import Statistic from "../Results/Statistic";
import OptionsList from "./OptionsList";

const URL = ""; //replace with GCP CF endpoint

export default function Leaderboard() {
  const [length, setLength] = useState(25);
  const [sortBy, setCondition] = useState("points");
  const [filterBy, setPredicate] = useState("none");
  const [playerName, setPlayerName] = useState("Enter player name");
  const [isQuerying, setState] = useState(false);

  const [data, setData] = useState([]);
  async function getData() {
    const response = await fetch(
      URL +
        `?length=${length}&filter=${filterBy}` +
        (playerName.length > 0 && `&name=${playerName}`)
    );
    const jsonData = await response.json();
    setData(jsonData.data);
  }
  (async () => await getData())();

  return (
    <div className="mx-auto text-left w-9/12 p-20 rounded-md bg-gray-100 flex flex-col items-center">
      <h1 className="font-bold text-3xl my-2">Leaderboard</h1>
      <div className="flex flex-col gap-y-2 place-self-start my-2">
        <OptionsList
          setState={setLength}
          state={length}
          updateValues={[25, 50, 100]}
          title="No. of entries:"
        />
        <OptionsList
          setState={setCondition}
          state={sortBy}
          updateValues={["points", "base score", "time bonus", "grids solved"]}
          title="Sort by:"
        />
        <OptionsList
          setState={setPredicate}
          state={filterBy}
          updateValues={["none", "grid size"]}
          title="Filter by:"
        />
        <Entry input={playerName} setInput={setPlayerName} />
        <button onClick={async () => await getData()}>Apply</button>
      </div>
      {/**filter by grid size, playername (sanitise on backend) */}
      {/**use the skeleton loading/suspense api? */}
      <Statistic gameData="thing" statistic="7" />
    </div>
  );
}
