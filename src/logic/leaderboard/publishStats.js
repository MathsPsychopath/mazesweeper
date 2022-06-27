import {
  setPublished,
  setPublishing,
  setUnpublished,
} from "../../redux/MenuSelection/menu.actions";

const URL = "https://pacific-song-345416.wn.r.appspot.com/leaderboard/";

export default async function publishStats(dispatch, gameData) {
  dispatch(setPublishing());
  const { gameState, gridState, solveTimes, ...data } = gameData;
  await fetch(URL, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((err) => {
    console.log(err);
    dispatch(setUnpublished());
    return false;
  });
  dispatch(setPublished());
  return true;
}
