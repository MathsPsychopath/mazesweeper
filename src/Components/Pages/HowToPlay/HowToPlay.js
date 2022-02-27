import React from "react";

export default function HowToPlay() {
  return (
    <div className="grid mx-auto w-9/12 text-left mb-20 mt-8">
      <h2 className="text-3xl text-bold">What is this?</h2>
      <p>
        MazeSweeper is a game heavily inspired by MineSweeper, except that you
        don't have to solve the board completely.
      </p>
      <br />
      <p>
        Instead, you need to determine the shortest distance of the path(s) from
        the start to the end. The aim is to determine as many shortest distances
        from the boards correctly under a set time. You also cannot click on a
        square that is not a empty path - think of it like a maze where the
        walls are pitfalls.
      </p>
      <br />
      <h2 className="text-3xl text-bold">Game Modes</h2>
      <ol className="list-decimal list-inside indent-5">
        <li>
          You have the choice of playing from the following options:
          <ul className="list-disc list-inside indent-10">
            <li>
              "<em>QuickMode</em>" - 2:30 mins
            </li>
            <li>"Normal" - 10 mins</li>
            <li>
              "Chill and Casual" - no time limit, but see how many consecutive
              correct answers you can get in a row.
            </li>
          </ul>
        </li>
        <li>
          The board provided will be like a MineSweeper grid, but with a
          distinct start and end. The number in the centre is the number of
          adjacent empty paths. There are different sizes:
          <ul className="list-disc list-inside indent-10">
            <li>10x10</li>
            <li>16x16</li>
            <li>16x30</li>
          </ul>
        </li>
      </ol>
      <br />
      <h2 className="text-3xl text-bold">Rules</h2>
      <ol className="list-decimal list-inside indent-5">
        <li>
          A path is defined to be any direct consecutive sequence of empty path
          squares between the start and end.
          <ul className="list-disc list-inside indent-10">
            <li>
              2 path squares are in a sequence if one is in the perimeter of the
              other - i.e., if the green square was your current, any other path
              square in its 8 sq. perimeter is valid as a addition to sequence
              starting green.
            </li>
          </ul>
        </li>
        <img
          src={require("./squares.png")}
          className="mx-auto w-60 my-4"
          alt="3x3 grid with centre selected and adjacent a different colour"
        />
        <li>
          You need to find the shortest path (measured in number of squares)
          from start to end, and type this value into the input box. If there is
          no valid path, type 0.
        </li>
        <li>
          Points are awarded based on the difficulty & speed of answers you
          give. See below for more on points.
        </li>
        <li>
          Error amounts - in different game modes, you are allowed a certain
          error boundary around the true answer in which answers will still
          accepted.
          <ul className="list-disc list-inside indent-10">
            <li>
              "<em>QuickMode</em>" has error boundary of (+1,-1)
            </li>
            <li>"Normal" has error boundary of (+2,-2)</li>
            <li>"Chill and Casual" has error boundary (+3,-3)</li>
          </ul>
        </li>
      </ol>
      <hr />
      <br />
      <h2 className="text-3xl text-bold">Points</h2>
      <p>
        Points allocated for solving a board is dependent of difficulty/size of
        board:
      </p>
      <ul className="list-disc list-inside indent-5">
        <li>10x10 gives 5 points per solve</li>
        <li>16x16 gives 10 points per solve</li>
        <li>16x30 gives 15 points per solve</li>
      </ul>
      <p>
        Each reward comes with modifiers which adjusts the points rewarded based
        on speed:
      </p>
      <ul className="list-disc list-inside indent-5">
        <li>If less than 30s per solve {"->"} +5 points</li>
        <li>If less than 1 min per solve {"->"} +3 points</li>
        <li>Otherwise, +1 point</li>
      </ul>
      <br />
      <h3 className="text-3xl text-bold">Deductions</h3>
      <p>
        In game modes like "QuickMode" and "Normal", if your answer is
        incorrect/not in error boundary, your score gets deducted by an amount
        based on the distance between your answer and the original, as well as
        the difficulty:
      </p>
      <p className="indent-5">
        *An underscore means "any mode or any distance"{" "}
      </p>
      <p className="indent-5">**Only 1 deduction is selected</p>
      <table className="border border-slate-400 border-collapse text-center my-4">
        <thead>
          <tr className="border border-slate-300 bg-slate-300">
            <th className="border border-slate-300 font-normal">Points</th>
            <th className="border border-slate-300 font-normal">Mode</th>
            <th className="border border-slate-300 font-normal">Distance</th>
          </tr>
        </thead>
        <tbody className="border-collapse">
          <tr className="border border-slate-300">
            <td className="border border-slate-300">-5</td>
            <td className="border border-slate-300">
              <em>QuickMode</em>
            </td>
            <td className="border border-slate-300">_</td>
          </tr>
          <tr className="border border-slate-300">
            <td className="border border-slate-300">-2</td>
            <td className="border border-slate-300">Normal</td>
            <td className="border border-slate-300">3</td>
          </tr>
          <tr className="border border-slate-300">
            <td className="border border-slate-300">-5</td>
            <td className="border border-slate-300">Normal</td>
            <td className="border border-slate-300">
              <span>&#8804;</span> 5
            </td>
          </tr>
          <tr className="border border-slate-300">
            <td className="border border-slate-300">-7</td>
            <td className="border border-slate-300">Normal</td>
            <td className="border border-slate-300">
              <span>&#8804;</span> 7
            </td>
          </tr>
          <tr className="border border-slate-300">
            <td className="border border-slate-300">-10</td>
            <td className="border border-slate-300">Normal</td>
            <td className="border border-slate-300">{">"} 7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
