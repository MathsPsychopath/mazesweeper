import React from "react";

/**
 *
 * @returns TLDR How-To
 */
export default function TLDR() {
  return (
    <>
      <p>
        Basically, you have a MineSweeper grid with number on them representing
        the number of path squares. Your goal is to find the shortest path using
        the path squares from start to finish, where 2 consecutive path squares
        are when 2 are adjacent (including diagonally).
      </p>
      <br />
      <p>
        You get points based on the mode, and there are different game modes.
        See "Good Version" for individual explanation.
      </p>
      <br />
      <p>
        Error boundaries exist, where this is the number of squares you can be
        off by for the answer to still be accepted. If there exists no valid
        path from start to finish, type 0 in the answer box.
      </p>
      <p>Points are deducted if you're wrong.</p>
    </>
  );
}
