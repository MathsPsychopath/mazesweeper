import React, { useState } from "react";
import AsyncButton from "../../Common/AsyncButton";
import Button from "../../Common/Button";
import OptionsList from "../../Common/OptionsList";
import TextEntry from "../../Common/TextEntry";

const URL = ""; //replace with GCP CF endpoint

function formatData(dataArray) {
  /**
   * {
   *  data: [{
   *    id: #,
   *    points: #,
   *    baseScore: #,
   *    timeBonus: #,
   *    gridsSolved: #,
   *    penalties: #,
   *    username: "",
   * }]
   * }
   */
  return dataArray.map((dataObject) => {
    const gameStats = Object.entries(dataObject).filter(
      (entry) => entry[0] !== "id" || entry[0] !== "username"
    );
    return {
      gameStats,
      username: dataObject.username,
    };
  });
}

function ClosedMenu({ setClosed }) {
  return (
    <div className="my-2 bg-slate-100 p-8 rounded-lg flex flex-col items-center">
      <h1 className="text-2xl text-gray-400">Search Parameters</h1>
      <Button handleClick={setClosed} handleClickParams={[false]}>
        Open
      </Button>
    </div>
  );
}

function OpenedMenu({ setData, setClosed }) {
  const [length, setLength] = useState(25);
  const [sortBy, setCondition] = useState("points");
  const [filterBy, setPredicate] = useState("none");
  const [playerName, setPlayerName] = useState("Enter username");
  const [gridSize, setGridSize] = useState("none");
  async function getData() {
    const response = await fetch(
      URL +
        `?length=${length}&filter=${filterBy}` +
        (playerName.length > 0 && `&name=${playerName}`) +
        (filterBy !== "grid size" && `&gridSize=${gridSize}`)
    );
    const jsonData = await response.json();
    const formatted = formatData(jsonData.data);

    setData(formatted);
    /**
     * [{
     *        gameStats: {
     *          subhead: head,...
     *        },
     *        username: STRING
     *    }, ...]
     */
  }

  return (
    <div className="my-2 bg-slate-100 p-4 md:p-8 rounded-lg">
      <h1 className="text-2xl text-gray-400">Search Parameters</h1>
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
        updateValues={["none", "grid size", "username"]}
        title="Filter by:"
      />
      <div className={filterBy === "username" ? "flex flex-col" : "hidden"}>
        <h1 className="text-xl">Search username:</h1>
        <TextEntry input={playerName} setInput={setPlayerName} />
      </div>
      <div className={filterBy === "grid size" ? "flex flex-col" : "hidden"}>
        <OptionsList
          setState={setGridSize}
          state={gridSize}
          updateValues={["10x10", "16x16", "16x30"]}
          title="Sizes:"
        />
      </div>

      <div className="flex justify-center">
        <Button handleClick={setClosed} handleClickParams={[true]}>
          Close
        </Button>
        <AsyncButton asyncCallback={getData} callbackParams={[]}>
          Apply
        </AsyncButton>
      </div>
    </div>
  );
}

export default function SearchParameters({ setData }) {
  const [closed, setClosed] = useState(false);
  return (
    <>
      {closed && <ClosedMenu setClosed={setClosed} />}
      {closed || <OpenedMenu setData={setData} setClosed={setClosed} />}
    </>
  );
}
