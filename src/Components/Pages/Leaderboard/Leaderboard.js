import React, { useState } from "react";
import Statistic from "../Results/Statistic";
import SearchParameters from "./SearchParameters";
import SuspenseStatistic from "./SuspenseStatistic";

function StatisticBlob({ head, subhead }) {
  return (
    <div
      className={
        "py-2 px-4 bg-yellow-400 text-white font-semibold rounded-lg " +
        "flex flex-col items-center border-orange-400 border-l-4 border-b-4"
      }
    >
      <h1>{head}</h1>
      <p>{subhead}</p>
    </div>
  );
}

function StatsList({ data }) {
  return (
    <>
      {data.map((dataObject, i) => {
        if (dataObject)
          return (
            <Statistic key={i}>
              <div className="flex flex-col grow sm:flex-row gap-1 justify-evenly ">
                {Object.entries(dataObject.gameStats).map((stat) => (
                  <StatisticBlob head={stat[1]} subhead={stat[0]} />
                ))}
              </div>
              <h1 className="sm:pl-8 text-gray-400 text-xl">
                {i + 1}:{dataObject.username}
              </h1>
            </Statistic>
          );
        return (
          <div key={i} className="flex flex-row grow sm:flex-col">
            <SuspenseStatistic />
          </div>
        );
      })}
    </>
  );
}

export default function Leaderboard() {
  //const [data, setData] = useState([...Array(5)]);
  const [data, setData] = useState([
    {
      gameStats: {
        points: 3,
        baseScore: 10,
        timeBonus: 11,
        gridsSolved: 3,
        penalties: 0,
      },
      username: "KKONA",
    },
    {
      gameStats: {
        points: 3,
        baseScore: 10,
        timeBonus: 11,
        gridsSolved: 3,
        penalties: 0,
      },
      username: "KKONA",
    },
    {
      gameStats: {
        points: 3,
        baseScore: 10,
        timeBonus: 11,
        gridsSolved: 3,
        penalties: 0,
      },
      username: "KKONA",
    },
    {
      gameStats: {
        points: 3,
        baseScore: 10,
        timeBonus: 11,
        gridsSolved: 3,
        penalties: 0,
      },
      username: "KKONA",
    },
    {
      gameStats: {
        points: 3,
        baseScore: 10,
        timeBonus: 11,
        gridsSolved: 3,
        penalties: 0,
      },
      username: "KKONA",
    },
  ]);
  return (
    <div className="mx-auto text-left py-8 px-auto rounded-md bg-white flex flex-col items-center">
      <h1 className="font-bold text-3xl my-2">Leaderboard</h1>
      <SearchParameters setData={setData} />
      <div className="w-full md:w-[40em] flex flex-wrap sm:flex-col gap-2 sm:gap-4">
        <StatsList data={data} />
      </div>
    </div>
  );
}
