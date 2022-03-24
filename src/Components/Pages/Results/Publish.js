import React from "react";
import { useDispatch, useSelector } from "react-redux";
import publishStats from "../../../logic/leaderboard/publishStats";
import { MdPublish, MdCheckCircle } from "react-icons/md";
import { AiOutlineLoading } from "react-icons/ai";

export default function Publish() {
  const dispatch = useDispatch();
  const { publishState } = useSelector((state) => state.menu);
  if (publishState === "UNPUBLISHED") {
    return (
      <button
        className="flex items-center justify-center text-lg border-black rounded-md border bg-white p-4 w-1/3 m-2 hover:bg-blue-100"
        onClick={() => publishStats(dispatch)}
      >
        <MdPublish />
        Publish Stats
      </button>
    );
  }
  return (
    <button
      className={`flex items-center justify-center text-lg border-black rounded-md border bg-white p-4 w-1/3 m-2 ${
        publishState === "PUBLISHED" ? "bg-green-500" : "bg-gray-400"
      }`}
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
