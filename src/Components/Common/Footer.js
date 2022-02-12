import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex justify-between mx-8 my-2 p-1">
      <div className="text-left">
        <h1 className="text-3xl font-sans hover:font-bold duration-75">
          mazesweeper
        </h1>
        <div>Made with ❤️ by Aaron Chan</div>
      </div>
      <div className="flex items-center text-4xl">
        <a href="https://github.com/MathsPsychopath">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/aaron-chan-801775212/">
          <AiFillLinkedin />
        </a>
      </div>
    </footer>
  );
}
