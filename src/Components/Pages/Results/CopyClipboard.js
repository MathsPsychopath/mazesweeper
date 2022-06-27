import React, { useState } from "react";
import { IoShareSocial } from "react-icons/io5";
import { Notification } from "../../Common/Notification";

async function handleClick(points, gameData, changeModalVis) {
  await navigator.clipboard
    .writeText(
      `MazeSweeper\nPoints: ${points}\nAverage Time: ${gameData[0]}\nGrids Solved: ${gameData[1]}\nGrid Size: ${gameData[2]}`
    )
    .then(() => changeModalVis(true));
}

export default function CopyClipboard(props) {
  const [showModal, changeModalVis] = useState(false);
  return (
    <>
      <button
        className={
          "flex items-center justify-center text-lg p-4 w-1/3 m-2 text-white " +
          "rounded-lg border bg-blue-400 hover:bg-purple-200 active:bg-purple-400"
        }
        onClick={() =>
          handleClick(props.points, props.gameData, changeModalVis)
        }
      >
        <span className="text-lg">
          <IoShareSocial />
        </span>
        Share
      </button>
      {showModal && (
        <Notification changeModalVis={changeModalVis}>
          Results copied to clipboard!
        </Notification>
      )}
    </>
  );
}
