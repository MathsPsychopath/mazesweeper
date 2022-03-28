import React, { useEffect, useState } from "react";
import Entry from "../../Common/Entry";
import OptionButton from "../../Common/OptionButton";
import Statistic from "../Results/Statistic";

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
      <div className="flex place-self-start my-2">
        <div className="flex gap-x-2">
          <h1 className="text-xl p-2">No. of entries:</h1>
          <OptionButton
            currentState={length === 25}
            updateState={setLength}
            updateValue={25}
          >
            25
          </OptionButton>
          <OptionButton
            currentState={length === 50}
            updateState={setLength}
            updateValue={50}
          >
            50
          </OptionButton>
          <OptionButton
            currentState={length === 100}
            updateState={setLength}
            updateValue={100}
          >
            100
          </OptionButton>
        </div>
        <div className="flex gap-x-2">
          <h1 className="text-xl p-2">Sort by:</h1>
          <OptionButton
            currentState={sortBy === "points"}
            updateState={setCondition}
            updateValue={"points"}
          >
            points
          </OptionButton>
          <OptionButton
            currentState={sortBy === "baseScore"}
            updateState={setCondition}
            updateValue={"baseScore"}
          >
            base score
          </OptionButton>
          <OptionButton
            currentState={sortBy === "timeBonus"}
            updateState={setCondition}
            updateValue={"timeBonus"}
          >
            time bonus
          </OptionButton>
          <OptionButton
            currentState={sortBy === "gridsSolved"}
            updateState={setCondition}
            updateValue={"gridsSolved"}
          >
            grids solved
          </OptionButton>
        </div>
        <div className="flex gap-x-2">
          <h1>Filter by:</h1>
          <OptionButton
            currentState={filterBy === "none"}
            updateState={setPredicate}
            updateValue={"none"}
          >
            none
          </OptionButton>
          <OptionButton
            currentState={filterBy === "gridSize"}
            updateState={setPredicate}
            updateValue={"gridSize"}
          >
            grid size
          </OptionButton>
          <Entry input={playerName} setInput={setPlayerName} />
        </div>
        <button onClick={async () => await getData()}>Apply</button>
      </div>
      {/**filter by grid size, playername (sanitise on backend) */}
      {/**use the skeleton loading/suspense api? */}
      <Statistic gameData="thing" statistic="7" />
    </div>
  );
}
