import React, { useState } from "react";
import Statistic from "../../Common/Statistic";
import SearchParameters from "./SearchParameters";
import SuspenseStatistic from "./SuspenseStatistic";

function StatisticBlob({ head, subhead }) {
  return (
    <div
      className={
        "py-2 px-4 bg-green-500 text-white font-semibold rounded-lg " +
        "flex flex-col items-center border-green-700 border-l-4 border-b-4"
        //potential alt. cyan, blue, green, @400/600, @200/400
      }
    >
      <h1>{head}</h1>
      <p>{subhead}</p>
    </div>
  );
}

function Stats({ i, dataObject }) {
  if (!dataObject.gameStats || !dataObject.username)
    return <SuspenseStatistic />;
  return (
    <div className="">
      <Statistic>
        <div className="flex flex-col grow sm:flex-row md:gap-1 justify-evenly ">
          {Object.entries(dataObject.gameStats).map((stat) => (
            <StatisticBlob head={stat[1]} subhead={stat[0]} />
          ))}
          <h1 className="sm:pl-8 text-gray-400 text-xl">
            {i + 1}:{dataObject.username}
          </h1>
        </div>
      </Statistic>
    </div>
  );
}

export default function Leaderboard() {
  //const [data, setData] = useState([{}, {}, {}, {}]);

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
      <div className="m-2 w-full md:w-[40em] flex flex-wrap sm:flex-col gap-2 sm:gap-4">
        {data.map((dataObject, i) => (
          <div
            className="flex flex-row grow sm:flex-col justify-center"
            key={i}
          >
            <Stats i={i} dataObject={dataObject} />
          </div>
        ))}
      </div>
    </div>
  );
}
