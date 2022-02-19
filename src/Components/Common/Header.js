import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

function activeState(isActive, isLarge = true) {
  if (isLarge) {
    return (
      "my-6 py-1 mx-0.5 w-40 rounded-md " +
      (isActive ? "bg-blue-100" : "bg-white")
    );
  }
  return (
    "my-1 py-1 mx-0.5 rounded-md border-y" +
    (isActive ? "bg-blue-100" : "bg-white")
  );
}
//make smallnav stacked, and activate on button
function SmallNav() {
  const [visibility, setVisibility] = useState("");
  const toggle = () => setVisibility(visibility ? "" : "hidden");
  return (
    <header className="flex flex-col md:hidden">
      <div className="text-3xl pb-2 border-b">
        <NavLink to="/">mazesweeper</NavLink>
        <button onClick={() => toggle()} className="absolute top-0 right-0 m-2">
          <AiOutlineMenu />
        </button>
      </div>
      <div
        className={`grid grid-cols-1 divide-y-2 justify-center rounded-2xl text-lg ${visibility}`}
      >
        <NavLink
          className={({ isActive }) => activeState(isActive, false)}
          to="/howtoplay"
        >
          How to play
        </NavLink>
        <NavLink
          className={({ isActive }) => activeState(isActive, false)}
          to="/play"
        >
          Play
        </NavLink>
        <NavLink
          className={({ isActive }) => activeState(isActive, false)}
          to="/leaderboard"
        >
          Leaderboard
        </NavLink>
      </div>
    </header>
  );
}
function LargeNav() {
  return (
    <header className="hidden md:flex font-sans justify-between">
      <div className="text-3xl my-4 mx-8">
        <NavLink to="/">mazesweeper</NavLink>
      </div>
      <div className="flex justify-between">
        <NavLink
          className={({ isActive }) => activeState(isActive)}
          to="/howtoplay"
        >
          How to play
        </NavLink>
        <NavLink className={({ isActive }) => activeState(isActive)} to="/play">
          Play
        </NavLink>
        <NavLink
          className={({ isActive }) => activeState(isActive)}
          to="/leaderboard"
        >
          Leaderboard
        </NavLink>
      </div>
    </header>
  );
}

export default function Header() {
  return (
    <>
      <LargeNav />
      <SmallNav />
    </>
  );
}
