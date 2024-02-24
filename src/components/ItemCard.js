import "./ItemCard.css";
import septimImage from "../septim.png";

const ItemCard = ({ item, addToCart }) => {
  const handleAddToCart = (item) => {
    const newCartItem = {
      id: Date.now(),
      name: item.name,
      category: item.category,
      type: item.type,
      price: item.price,
      image: item.image,
    };
    addToCart(newCartItem);
  };
  return (
    <div className="Card">
      <div className="Card__top">
        <img
          className="Card__img"
          src={item.image}
          height={"300"}
          alt="item__img"
        ></img>
      </div>
      <div className="Card__body">
        <div className="title__line">
          <p className="Card__title">{item.name}</p>
          <div className="Card__line">
            <p className="Card__price">{item.price}</p>
            <img
              src={septimImage}
              width={"20"}
              height={"20"}
              alt="septim"
            ></img>
          </div>
        </div>
        <p className="Card__subtitle">{item.category}</p>
        <div onClick={() => handleAddToCart(item)} className="Card__button">
          ADD TO CART
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
