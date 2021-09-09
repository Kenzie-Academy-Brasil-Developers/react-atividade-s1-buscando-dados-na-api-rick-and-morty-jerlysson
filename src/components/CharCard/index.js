import "./style.css";

function CharCart({ item }) {
  return (
    <>
      {item.status === "Alive" ? (
        <div className="carBox">
          <p className="name">{item.name}</p>
          <img className="img alive" src={item.image} alt={item.name}></img>
        </div>
      ) : (
        <div className="carBox">
          <p className="name">{item.name}</p>
          <img className="img death" src={item.image} alt={item.name}></img>
        </div>
      )}
    </>
  );
}

export default CharCart;
