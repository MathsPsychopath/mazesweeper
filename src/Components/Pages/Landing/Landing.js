import React from "react";

export default function Landing() {
  return (
    <div>
      <h1>About</h1>
      <p>
        This game is a MineSweeper-esque game. See "How to Play" for details on
        the rules. Simplify navigate using the top navbar. If you want to come
        back here, click on "Mazesweeper" on the navbar.
      </p>
      <h2>How this game was made</h2>
      <p>
        This game was made using React, Redux and deployed via GitHub Actions to
        GitHub Pages. The fact that the url is
        "https://mathspsychopath.github.io/mazesweeper/" by default means it is
        a repo hosted on GitHub.
        <br />
        It also uses Jest to test certain bits of functionality, which is done
        before every deploy on Actions.
      </p>
      <h2>About me</h2>
      <p>
        I'm Aaron, the guy who made this game. Visit and/or follow my LinkedIn
        profile and GitHub using the footer below. This should be the first in a
        series of portfolio projects. Stay tuned for more.
      </p>
    </div>
  );
}
