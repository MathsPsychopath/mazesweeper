import React from "react";
import { useNavigate } from "react-router-dom";
import Publish from "./Publish";
import Statistic from "./Statistic";
import TableData from "./TableData";
import { IoPlay } from "react-icons/io5";
import { useSelector } from "react-redux";
import { formatTime } from "../../Timer/Timer";

const stats = ["Average Time", "Grids Solved", "Size"];
const pointMetrics = [
  "Base Score",
  "Penalties (incl. when points = 0)",
  "Time Bonuses",
  "Final Score",
];

function getAverageTime(solveTimes) {
  const average =
    solveTimes.reduce((acc, cur) => acc + cur, 0) / solveTimes.length;
  return isNaN(average) ? "???" : formatTime(Math.floor(average));
}

export default function Results() {
  const navigate = useNavigate();
  const game = useSelector((state) => state.game);
  const { gridSize } = useSelector((state) => state.menu);
  const { solveTimes, baseScore, penalties, timeBonus, points } = game;
  console.log(game);
  const pointsData = [baseScore, penalties * -1, timeBonus, points];
  const gameData = [getAverageTime(solveTimes), solveTimes.length, gridSize];
  return (
    //TODO #5 add user's historical data
    <div className="mx-auto text-left w-9/12 p-20 rounded-md bg-gray-100 flex flex-col items-center">
      <h1 className="font-bold text-3xl">Results</h1>
      <div className="flex flex-col md:flex-row p-4 w-full">
        {stats.map((statistic, i) => (
          <div key={i} className="w-full mr-4">
            <Statistic statistic={statistic} gameData={gameData[i]} />
          </div>
        ))}
      </div>
      <table className="table-fixed border-collapse w-full">
        <thead>
          <tr>
            <th className="text-left font-normal text-gray-700 bg-white pl-4 rounded-l-md">
              Point Metrics
            </th>
            <th className="text-left font-normal text-gray-700 bg-white pl-4 rounded-r-md">
              Points
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          {pointMetrics.map((metric, i) => (
            <TableData
              metric={metric}
              metricData={pointsData[i]}
              key={metric}
            />
          ))}
        </tbody>
      </table>
      <div className="w-full flex justify-center">
        <button
          className="flex items-center justify-center border-black rounded-md border bg-white p-4 w-1/3 m-2 hover:bg-blue-100 text-lg"
          onClick={() => navigate("/play")}
        >
          <IoPlay />
          Play Again
        </button>
        <Publish />
      </div>
    </div>
  );
}
