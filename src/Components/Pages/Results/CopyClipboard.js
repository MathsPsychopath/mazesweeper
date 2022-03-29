import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import { IoShareSocial, IoClose } from "react-icons/io5";

function NotificationModal({ changeModalVis }) {
  const modalRoot = document.getElementById("modal-root");
  const modal = document.createElement("div");
  useEffect(() => {
    modalRoot.appendChild(modal);
    return () => {
      modalRoot.removeChild(modal);
    };
  }, [modal, modalRoot]);

  return reactDom.createPortal(
    <div className="z-50 fixed top-0 left-0 w-full flex justify-center items-center">
      <div className="flex bg-purple-700 text-white p-2 w-full justify-center rounded-md">
        <h1>Results copied to clipboard!</h1>
        <button onClick={() => changeModalVis(false)}>
          <IoClose />
        </button>
      </div>
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
      {showModal && <NotificationModal changeModalVis={changeModalVis} />}
    </>
  );
}
