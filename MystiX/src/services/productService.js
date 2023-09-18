export const getAllProducts = async () => {
  const key = "4faa831010134374a89855d3949ef7be";
  const url = `https://api.rawg.io/api/games?key=${key}`;

  const endPoint = await fetch(url);

  const data = await endPoint.json();

  return data.results;
};
