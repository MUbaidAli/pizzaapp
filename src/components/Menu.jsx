import Item from "./Item";

function Menu({ pizzaData }) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {/* {for( i= 0;i < pizzaData.length;i++){
    console.log(i)
}} */}
        {pizzaData.length === 0 && (
          <p className="search-prompt">Not Such Item With Search Query </p>
        )}

        {pizzaData.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    </main>
  );
}

export default Menu;
