import { useEffect, useState, useMemo } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [items, setItems] = useState([
    {
      id: 0,
      name: "Daedric Helmet",
      category: "Helmets",
      type: "Armor",
      price: 1600,
      image:
        "https://www.nikkoindustries.com/cdn/shop/products/Daedrichelmet1.35.jpg?v=1658528807",
    },
    {
      id: 1,
      name: "Daedric Sword",
      category: "Swords",
      type: "Weapons",
      price: 1250,
      image:
        "https://media.sketchfab.com/models/e34e9a701a9148778a0afbda0598cf49/thumbnails/1a4a5be75c9d4b4a9080df69d29fe71e/00e2b330e6614f908ce07d8527a63ec1.jpeg",
    },

    {
      id: 2,
      name: "Daedric Bow",
      category: "Bows",
      type: "Weapons",
      price: 2500,
      image:
        "https://www.nikkoindustries.com/cdn/shop/products/DaedricBow1.95.jpg?v=1661211021",
    },
    {
      id: 3,
      name: "Daedric Dagger",
      category: "Daggers",
      type: "Weapons",
      price: 500,
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8c2fffa1-d3dc-48c5-8e32-c96d7054fe8a/ddj86ea-2824a5b2-c6d4-4a86-b301-0903db7e9c53.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhjMmZmZmExLWQzZGMtNDhjNS04ZTMyLWM5NmQ3MDU0ZmU4YVwvZGRqODZlYS0yODI0YTViMi1jNmQ0LTRhODYtYjMwMS0wOTAzZGI3ZTljNTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kRAo0p5LVujBOjDvNgPXZEds3xiOBqsopgRybXrXKMU",
    },
    {
      id: 4,
      name: "Potion of Healing",
      category: "Healing Potion",
      type: "Potions",
      price: 36,
      image: "https://cdn.mos.cms.futurecdn.net/YoK9D2Zwst7CmQQLtKc4UD.jpg",
    },
  ]);
  const [types, setTypes] = useState([
    { id: 0, title: "All" },
    { id: 1, title: "Armor" },
    { id: 2, title: "Weapons" },
    { id: 3, title: "Potions" },
    { id: 4, title: "Magic" },
    { id: 5, title: "Jewelry" },
  ]);
  const [categories, setCategories] = useState([
    { id: 0, title: "Helmets" },
    { id: 1, title: "Gauntlets" },
    { id: 2, title: "Armors" },
    { id: 3, title: "Boots" },
    { id: 4, title: "Swords" },
    { id: 5, title: "Daggers" },
    { id: 6, title: "Bows" },
    { id: 7, title: "Maces" },
    { id: 8, title: "Crossbows" },
    { id: 9, title: "Axes" },
  ]);
  const [filteredItems, setFilteredItems] = useState(items);
  const [cart, setCart] = useState([]);
  const [isActive, setActive] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const findItems = () => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchItem.toLowerCase())
    );
  };

  useEffect(() => {
    setFilteredItems(findItems);
  }, [searchItem]);

  const deleteFromCart = (item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };
  const cartMemoized = useMemo(() => cart, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log(cart);
  };

  const createItem = (newItem) => {
    setItems([...items, newItem]);
  };

  useEffect(()=>{
    setFilteredItems(items)
  }, [items])

  return (
    <div className="wrapper">
      <Header
        cart={cartMemoized}
        isActive={isActive}
        setActive={setActive}
        setSearchItem={setSearchItem}
      />
      <Content
        deleteFromCart={deleteFromCart}
        addToCart={addToCart}
        items={items}
        isActive={isActive}
        setActive={setActive}
        cart={cartMemoized}
        filteredItems={filteredItems}
        setFilteredItems={setFilteredItems}
        types={types}
        categories={categories}
        add={createItem}
      />
    </div>
  );
}

export default App;
