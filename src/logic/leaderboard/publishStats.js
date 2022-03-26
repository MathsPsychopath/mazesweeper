import {
  setPublished,
  setPublishing,
  setUnpublished,
} from "../../redux/MenuSelection/menu.actions";

const URL = ""; //TODO replace with EC2 Endpoint

export default async function publishStats(dispatch, gameData) {
  dispatch(setPublishing());
  const data = Object.keys(gameData)
    .filter((key) => key !== "gameState" && key !== "gridState")
    .reduce((acc, key) => {
      acc[key] = gameData[key];
      return acc;
    }, {});

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
