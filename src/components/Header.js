import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Header = ({ cart, isActive, setActive, setSearchItem}) => {
  return (
    <header>
      <div className="header__wrapper">
        <div className="header__line">
          <img
            src="https://ih1.redbubble.net/image.3154609656.3139/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg"
            height={"50"}
            alt="logo"
          ></img>
          <p className="header__name">Belethor's General Goods</p>
        </div>
        <div>
          <ul className="nav__list__right">
            <li className="nav__search">
              <div className="nav__search__wrap">
                <input onChange={(e) => setSearchItem(e.target.value)} />
                <FaSearch />
              </div>
            </li>
            <li
              className="cart__logo"
              onClick={() => {
                setActive(!isActive);
              }}
            >
              <FaShoppingCart size={"25"} />
              <p>({cart.length})</p>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
