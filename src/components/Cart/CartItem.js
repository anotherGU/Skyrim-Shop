import "./CartItem.css";
import septimImage from "../../septim.png";
import { MdDelete } from "react-icons/md";

const CartItem = ({ cartItem, deleteFromCart }) => {
  return (
    <div className="CartItem">
      <div className="CartItem__row">
        <img
          height={"150"}
          width={"30%"}
          src={cartItem.image}
          alt="cart__img"
        ></img>
        <div className="CartItem__info">
          <p>{cartItem.name}</p>
          <p className="CartItem__category">{cartItem.category}</p>
          <p>{cartItem.id}</p>
        </div>
        <div className="CartItem__price">
          <img
            className="CartItem__img"
            src={septimImage}
            width={"20"}
            height={"20"}
            alt="septim"
          ></img>
          <div>{cartItem.price}</div>
        </div>
        <div>
          <MdDelete
            className="CartItem__delete"
            onClick={() => {
              deleteFromCart(cartItem);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
