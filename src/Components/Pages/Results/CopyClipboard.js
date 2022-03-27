import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import { IoShareSocial, IoClose } from "react-icons/io5";

function NotificationModal({ changeModalVis }) {
  const modal = document.createElement("div");
  useEffect(() => {
    document.body.appendChild(modal);

    return () => {
      document.body.removeChild(modal);
    };
  }, [modal]);

  return reactDom.createPortal(
    <div className="z-50">
      <h1>Results copied to clipboard!</h1>
      <button onClick={() => changeModalVis(false)}>
        <IoClose />
      </button>
    </div>,
    modal
  );
}

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
        className={`flex items-center justify-center text-lg border-black rounded-md border bg-white p-4 w-1/3 m-2 hover:bg-blue-100`}
        onClick={() =>
          handleClick(props.points, props.gameData, changeModalVis)
        }
      >
        <span className="text-lg">
          <IoShareSocial />
        </span>
        Share
      </button>
      {showModal && <NotificationModal changeModalVis={changeModalVis} />}
    </>
  );
}
