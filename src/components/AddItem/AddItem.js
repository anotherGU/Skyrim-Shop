import React from "react";
import "./AddItem.css";

const AddItem = ({isAdd, setAdd, children}) => {
  return (
    <div
      className={isAdd ? "add active" : "add"}
      onClick={() => setAdd(false)}
    >
      <div
        className={isAdd ? "add__content active" : "add__content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default AddItem;
