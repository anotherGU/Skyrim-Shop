import { useState, useEffect, useMemo } from "react";
import "./Content.css";
import Sidebar from "./Sidebar";
import Cart from "./Cart/Cart";
import CartItem from "./Cart/CartItem";
import ItemList from "./ItemList/ItemList";

const Content = ({ items, addToCart, isActive, setActive, cart, deleteFromCart, filteredItems, setFilteredItems, types, categories, add }) => {

  const [totalPrice, setTotalPrice] = useState(0);

  const price = useMemo(()=>{
    return cart.reduce((acc, item) => acc + item.price, 0)
  }, [cart])

  useEffect(() => {
    setTotalPrice(price);
  }, [price]);

  return (
    <div>
      <div className="content__wrapper">
        <div className="container">
          <div className="asd">
            <Sidebar types={types} items={items} setFilteredItems={setFilteredItems} categories={categories} add={add} />
            <ItemList filteredItems={filteredItems} addToCart={addToCart}/>
          </div>
        </div>
      </div>
      <Cart totalPrice={totalPrice} isActive={isActive} setActive={setActive}>
        {
         cart.length === 0 ? <div className="cart__notification">Cart is empty</div> : cart.map((item) => {
          return <CartItem key={item.id} cartItem={item} deleteFromCart={deleteFromCart} />;
        })
        }
      </Cart>
    </div>
  );
};

export default Content;
