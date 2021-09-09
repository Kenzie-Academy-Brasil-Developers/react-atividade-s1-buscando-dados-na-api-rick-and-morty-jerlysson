import "./style.css";
import CharCart from "../CharCard";

function Characters({ charactersList }) {
  return (
    <>
      <h2 className="subTitle">Meus Personagens!</h2>
      {charactersList.map((item) => (
        <CharCart key={item.id} item={item} />
      ))}
    </>
  );
}

export default Characters;
