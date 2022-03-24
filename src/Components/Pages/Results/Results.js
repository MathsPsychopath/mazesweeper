import React from "react";
import { useNavigate } from "react-router-dom";
import Publish from "./Publish";
import Statistic from "./Statistic";
import TableData from "./TableData";
import { IoPlay } from "react-icons/io5";

const stats = ["Average Time", "Grids Solved", "Size"];
const pointMetrics = ["Base Score", "Penalties", "Time Bonuses", "Final Score"];

export default function Results() {
  const navigate = useNavigate();
  const pointsData = [0, 0, 0, 0];
  const gameData = ["0:38", "5", "16x16"];
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
          className="flex items-center justify-center border-black rounded-md border bg-white p-4 w-1/3 m-2 hover:bg-blue-100"
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
