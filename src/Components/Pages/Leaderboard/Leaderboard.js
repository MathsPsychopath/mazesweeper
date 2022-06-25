import React, { useEffect, useState } from "react";
import Button from "../../Common/Button";
import Loading from "./Loading";
import Options from "./Options";
// import Statistic from "../../Common/Statistic";

// fix footer on bottom, unless content breaks through -> auto????
//pagination????
//pls fix PlayGame 16x16 16x30 CSS

export default function Leaderboard() {
  const [entries, setEntries] = useState(25);
  const [sortBy, setSort] = useState("points"); //points | base score | time bonus | grids solved
  const [name, setName] = useState("Enter username"); //optional
  const [gridSize, setSize] = useState("10x10"); //optional
  const [mode, setMode] = useState("QuickMode"); //optional
  // const [data, setData] = useState([]);
  const [fetched, setFetchState] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!fetched) {
      setFetchState(true);
    }
  }, [fetched]);

  //need to change parameters to correct attr name for api
  return (
    <div className="mx-auto py-8 rounded-md bg-white flex flex-col items-center max-w-5xl">
      <h1 className="font-bold text-3xl my-2 w-80 sm:w-auto">Leaderboard</h1>
      {open && (
        <>
          <Options
            entries={entries}
            sortBy={sortBy}
            name={name}
            gridSize={gridSize}
            mode={mode}
            setEntries={setEntries}
            setSort={setSort}
            setName={setName}
            setSize={setSize}
            setMode={setMode}
          />
          <div className="flex w-full justify-center ">
            <Button handleClick={setOpen} handleClickParams={[false]}>
              Close
            </Button>
            <Button handleClick={setFetchState} handleClickParams={[false]}>
              Submit
            </Button>
          </div>
        </>
      )}
      {open || (
        <Button handleClick={setOpen} handleClickParams={[true]}>
          Open Search Parameters
        </Button>
      )}
      <div className="m-2 w-fit sm:w-[40em] flex flex-wrap sm:flex-col gap-2 sm:gap-4">
        {fetched ? null : <Loading />}
      </div>
    </div>
  );
}
