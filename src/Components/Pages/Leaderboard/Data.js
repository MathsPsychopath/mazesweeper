import { useWindowWidth } from "@react-hook/window-size";
import React from "react";
import TableHead from "../../Common/Table/TableHead";
import TableBody from "../../Common/Table/TableBody";
import { BiHappy, BiShocked } from "react-icons/bi";

const xsAliases = {
  record_id: "record_id",
  username: "Username",
  points: "Points",
  grids_solved: "Grids solved",
};

const smAliases = {
  ...xsAliases,
  game_mode: "Game mode",
  grid_size: "Grid size",
};

const mdAliases = {
  ...smAliases,
  base_score: "Base score",
  penalties: "Penalties",
  time_bonus: "Time bonus",
};

const formatData = (obj, aliases) => {
  const map = new Map();

  for (const [key, value] of Object.entries(obj)) {
    map.set(aliases[key], value);
  }
  map.delete(undefined);
  return map;
};

export default function Data({ data }) {
  const width = useWindowWidth();
  const aliases = width < 640 ? xsAliases : width < 768 ? smAliases : mdAliases;

  if (data === undefined) {
    return (
      <div className="text-xl flex flex-col items-center">
        <span>An error occurred!</span>
        <span>Open an GitHub issue or DM on LinkedIn</span>
        <BiShocked className="text-3xl" />
      </div>
    );
  }
  if (data.length === 0)
    return (
      <div className="text-xl flex justify-center">
        No data yet. Be the first one!{" "}
        <span className="animate-bounce">
          <BiHappy className="animate-spin self-end text-3xl" />
        </span>
      </div>
    );

  const mapData = data.map((record) => formatData(record, aliases));
  return (
    <div className="border-slate-500 border-2 rounded-md text-center  ">
      <table className="w-full border-spacing-0 ">
        <TableHead headings={[...mapData[0].keys()]} />
        <TableBody data={data.map((obj) => formatData(obj, aliases))} />
      </table>
    </div>
  );
}
