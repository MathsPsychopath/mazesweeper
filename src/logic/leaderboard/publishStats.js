import {
  setPublished,
  setPublishing,
  setUnpublished,
} from "../../redux/MenuSelection/menu.actions";

const URL = ""; //TODO replace with GCP CF Endpoint

export default async function publishStats(dispatch, gameData) {
  dispatch(setPublishing());
  console.log(gameData);
  const { gameState, gridState, solveTimes, ...data } = gameData;
  console.log(data);
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
  });
  dispatch(setPublished());
}
