import React from "react";
import { useNavigate } from "react-router-dom";

const stats = ["Average Time", "Grids Solved", "Size"];
const pointMetrics = ["Base Score", "Penalties", "Time Bonuses", "Final Score"];

export default function Results() {
  const navigate = useNavigate();
  const pointsData = [];
  const gameData = [];
  return (
    <div>
      <h1>Results</h1>
      <div>
        {stats.map((statistic, i) => (
          <div>
            <h1>{statistic}</h1>
            <p>{gameData[i]}</p>
          </div>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>Point Metrics</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {pointMetrics.map((metric, i) => (
            <tr>
              <td>{metric}</td>
              <td>{pointsData[i]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => navigate("/play")}>Play Again</button>
        <button>Publish Stats</button>
      </div>
    </div>
  );
}
