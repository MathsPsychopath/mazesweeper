import React, { useEffect, useRef, useState } from "react";
import reactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Common/Button";
import TextEntry from "../../Common/TextEntry";
import publishStats from "../../../logic/leaderboard/publishStats";
import {
  setPublished,
  setUnpublished,
} from "../../../redux/MenuSelection/menu.actions";

export default function UsernamePrompt({ gameData, setVisibility }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const ref = useRef(document.createElement("div")); //ref is used to persist over input state deltas
  const { gridSize, mode } = useSelector((state) => state.menu);
  useEffect(() => {
    const node = ref.current;
    const modalRoot = document.getElementById("modal-root");
    modalRoot.appendChild(node);
    return () => {
      modalRoot.removeChild(node);
    };
  }, [ref]);

  function handleClick() {
    gameData.gridSize = gridSize;
    gameData.mode = mode;
    gameData.username = input;
    setVisibility(false);
    publishStats(dispatch, gameData);
  }

  return reactDom.createPortal(
    <div className="z-50 fixed top-0 left-0 flex justify-center items-center bg-slate-700/50 w-full h-full">
      <div className="bg-white w-full sm:w-2/3 p-20 opacity-100 rounded-lg relative">
        <div className="flex flex-col gap-y-8 items-center">
          <h1 className="text-2xl">Enter a username:</h1>
          <TextEntry input={input} setInput={setInput} />
          <div className="w-80 flex justify-center">
            <Button
              handleClick={handleClick}
              handleClickParams={[]}
              isDisabled={input.length < 5 || input.length > 20}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>,
    ref.current
  );
}
