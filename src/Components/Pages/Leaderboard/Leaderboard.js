import React, { useEffect, useState } from "react";
import Button from "../../Common/Button";
import Loading from "./Loading";
import Options from "./Options";
import Data from "./Data";

// fix footer on bottom, unless content breaks through -> auto????

const aliases = {
  points: "points",
  penalties: "penalties",
  "grids solved": "grids_solved",
  "base score": "base_score",
};

export default function Leaderboard() {
  const [entries, setEntries] = useState(25);
  const [sortBy, setSort] = useState("points");
  const [name, setName] = useState(""); //optional
  const [gridSize, setSize] = useState(""); //optional
  const [mode, setMode] = useState(""); //optional
  const [data, setData] = useState([]);
  const [fetched, setFetchState] = useState(false);
  const [open, setOpen] = useState(false);

  let url = `https://pacific-song-345416.wn.r.appspot.com/leaderboard?entries=${entries}&sortBy=${aliases[sortBy]}`;
  if (gridSize) url += `&gridSize=${gridSize}`;
  if (mode) url += `&mode=${encodeURIComponent(mode)}`;
  if (name) url += `&username=${encodeURIComponent(name + "%")}`;

  useEffect(() => {
    const fetchData = async () => {
      let raw;
      try {
        raw = await fetch(url);
      } catch (error) {
        setData(undefined);
        setFetchState(true);
        return;
      }
      const json = await raw.json();
      setData(json);
      setFetchState(true);
    };
    if (!fetched) {
      (async () => {
        await fetchData();
      })();
    }
  }, [entries, fetched, url]);

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
        {fetched ? <Data data={data} /> : <Loading />}
      </div>
    </div>
  );
}
