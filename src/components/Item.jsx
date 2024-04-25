function Item({ item }) {
  const { photoName, name, price, ingredients, soldOut } = item;
  return (
    <div className={soldOut ? "pizza sold-out" : "pizza"}>
      <img src={photoName} alt="focaccia pizza" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{!soldOut ? `${price}$` : "Sold Out"} </span>
      </div>
    </div>
  );
}

export default Item;
