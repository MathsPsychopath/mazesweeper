import {
  setPublished,
  setPublishing,
  setUnpublished,
} from "../../redux/MenuSelection/menu.actions";

const URL = "https://pacific-song-345416.wn.r.appspot.com/leaderboard/";

export default async function publishStats(
  dispatch,
  gameData,
  setErrored,
  setVisibility
) {
  dispatch(setPublishing());
  const { gameState, gridState, solveTimes, ...data } = gameData;
  try {
    await fetch(URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    // console.log(err);
    dispatch(setUnpublished());
    setVisibility(false);
    setErrored(true);
    return false;
  }
  dispatch(setPublished());
  return true;
}
