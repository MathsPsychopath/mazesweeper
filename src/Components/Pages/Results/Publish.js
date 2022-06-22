import React, { useState } from "react";
import { useSelector } from "react-redux";
import { MdPublish, MdCheckCircle } from "react-icons/md";
import { AiOutlineLoading } from "react-icons/ai";
import UsernamePrompt from "./UsernamePrompt";

export default function Publish() {
  const { publishState } = useSelector((state) => state.menu);
  const gameData = useSelector((state) => state.game);
  const [promptVisible, setVisibility] = useState(false);
  const hasSignificantPts = gameData.points > 5;
  if (publishState === "UNPUBLISHED" || !promptVisible) {
    return (
      <button
        className={
          "flex items-center justify-center text-lg border-black text-white rounded-lg p-4 w-1/3 m-2 " +
          (hasSignificantPts
            ? " bg-blue-400 hover:bg-purple-200 active:bg-purple-400 "
            : " bg-gray-500 cursor-default")
        }
        onClick={() => hasSignificantPts && setVisibility(true)}
      >
        {promptVisible && (
          <UsernamePrompt gameData={gameData} setVisibility={setVisibility} />
        )}
        <span className="text-lg">
          <MdPublish />
        </span>
        Publish Stats
      </button>
    );
  }
  return (
    <button
      className={
        "flex items-center justify-center text-lg rounded-lg text-white " +
        `p-4 w-1/3 m-2 ${
          publishState === "PUBLISHED" ? "bg-purple-700" : "bg-gray-400"
        }`
      }
      disabled
    >
      {publishState === "PUBLISHED" ? (
        <MdCheckCircle />
      ) : (
        <div className="animate-spin">
          <AiOutlineLoading />
        </div>
      )}
      {publishState === "PUBLISHED" ? "Published" : "Publishing..."}
    </button>
  );
}
