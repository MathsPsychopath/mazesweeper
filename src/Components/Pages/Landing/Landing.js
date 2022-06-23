import React from "react";

export default function Landing() {
  return (
    <div className="text-left mx-auto w-9/12 max-w-2xl mb-20 mt-8">
      <h1 className="font-bold text-3xl">About</h1>
      <p>
        This game is a MineSweeper-esque game. See "How to Play" for details on
        the rules. Simply navigate using the top navbar. If you want to come
        back here, click on "Mazesweeper" on the navbar. Go to "Play" to set up
        a game, and "Leaderboard" to view how others did
      </p>
      <br />
      <h2 className="font-bold text-2xl">How this game was made</h2>
      <p>
        This game was made using React, Redux, Tailwind CSS and deployed via
        GitHub Actions to GitHub Pages. The fact that the origin is
        "https://mathspsychopath.github.io/" by default means it is a repo
        hosted on GitHub.
        <br />
        It also uses Jest to test certain bits of functionality, which is done
        before every deploy on Actions.
        <br />
        The backend uses a Google Cloud Platform App Engine service, Express.js
        server, a MySQL database instance on private IP, as well as serverless
        VPC access connectors. GCP was used over AWS because I wasted my free
        trial on it.
      </p>
      <br />
      <h2 className="font-bold text-2xl">About me</h2>
      <p>
        I'm Aaron, the guy who made this game. Visit and/or follow my LinkedIn
        profile and GitHub using the footer below. This should be the first in a
        series of portfolio projects. Stay tuned for more.
      </p>
    </div>
  );
}
