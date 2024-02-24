import AddForm from "./AddItem/AddForm";
import AddItem from "./AddItem/AddItem";
import "./Sidebar.css";
import { useState } from "react";

const Sidebar = ({ setFilteredItems, items, types, categories, add }) => {

  const [isAdd, setAdd] = useState(false)

  const itemFilter = (type) => {
    if (type === "All") {
      setFilteredItems(items);
    } else {
      const filtered = [...items].filter((item) => item.type === type);
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="side">
      <ul className="side__menu">
        {types.map((type) => (
          <li key={type.id} onClick={()=>{itemFilter(type.title)}} className="side__item">{type.title}</li>
        ))}
        <li onClick={()=>{setAdd(!isAdd)}} className="side__item">
          Add New Item
        </li>
      </ul>
      <AddItem isAdd={isAdd} setAdd={setAdd} >
        <AddForm types={types} categories={categories} add={add} setAdd={setAdd} />
      </AddItem>
    </div>
  );
};

export default Sidebar;
