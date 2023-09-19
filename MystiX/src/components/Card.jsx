import critcLogo from "../assets/metacriticLogo.png";

const Card = ({ game }) => {
  const genresList = game.genres.map((genre) => genre.name).join(", ");
  const platformsList = game.parent_platforms
    .map((parentPlatform) => parentPlatform.platform.name)
    .join(" - ");

  return (
    <div className="cardGame">
      <div className="cardGameImageContainer">
        <img src={game.background_image} alt={game.name} />
      </div>
      <div className="cardGameDataContainer">
        <div className="cardGameTitle">
          <h3>{game.name}</h3>
          <div className="cardGameCritic">
            <p>{game.metacritic}</p>
            <img src={critcLogo} alt="metacritic logo" />
          </div>
        </div>
        <div className="detailsPriceContainer">
          <div className="cardGameDetails">
            <p>{genresList}</p>
            <p>{platformsList}</p>
          </div>
          <div className="cardGamePrice">
            <p>$60</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
