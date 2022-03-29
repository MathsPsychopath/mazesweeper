import React, { useState } from "react";
import Button from "../../Common/Button";
import OptionsList from "../../Common/OptionsList";
import TextEntry from "../../Common/TextEntry";

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

  const [isQuerying, setFetchState] = useState(false);

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
    <div className="my-2 bg-slate-100 p-8 rounded-lg">
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
      <div className="flex justify-center">
        <button className="p-4 " onClick={() => setClosed(true)}>
          Close
        </button>
        <button onClick={async () => await getData()}>Apply</button>
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
