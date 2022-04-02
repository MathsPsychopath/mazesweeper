import {
  setPublished,
  setPublishing,
  setUnpublished,
} from "../../redux/MenuSelection/menu.actions";

const URL = ""; //TODO replace with GCP CF Endpoint

export default async function publishStats(dispatch, gameData, username) {
  dispatch(setPublishing());
  const data = Object.keys(gameData)
    .filter(
      (key) =>
        !isNaN(Number(gameData[key].length === 0 ? undefined : gameData[key]))
    )
    .reduce((acc, key) => {
      acc[key] = gameData[key];
      return acc;
    }, {});
  data["username"] = username;
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
