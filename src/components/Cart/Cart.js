import septimImage from "../../septim.png";
import "./Cart.css";

const Cart = ({ isActive, setActive, children, totalPrice }) => {
  return (
    <div
      className={isActive ? "cart active" : "cart"}
      onClick={() => setActive(false)}
    >
      <div
        className={isActive ? "cart__content active" : "cart__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <div className="cart__total">
          <div className="cart__total__price">Total Price: {totalPrice}</div>
          <img
            className="cart__total__img"
            src={septimImage}
            width={"20"}
            height={"20"}
            alt="septim"
          ></img>
        </div>
        <div className="cart__button">BUY NOW</div>
      </div>
    </div>
  );
};

export default Cart;
