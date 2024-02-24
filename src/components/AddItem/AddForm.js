import React, { useState } from "react";
import "./AddForm.css";

const AddForm = ({ types, categories, add, setAdd }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputPrice, setInputPrice] = useState(0);
  const [inputImage, setInputImage] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputTypeChange = (event) => {
    setInputType(event.target.value);
  };

  const handleInputCategoryChange = (event) => {
    setInputCategory(event.target.value);
  };

  const handleInputPriceChange = (event) => {
    setInputPrice(event.target.value);
  };

  const handleInputImageChange = (event) => {
    setInputImage(event.target.value);
  };

  const handleSubmit = (event) => {

    event.preventDefault();

    const newItem = {
        id: Date.now(), 
        name: inputValue, 
        category: inputCategory,
        type: inputType,
        price: +inputPrice,
        image: inputImage,
    }
    
    add(newItem);
    setAdd(false);
  };

  return (
    <form className="add__wrapper" onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        className="add__input"
        placeholder="Name"
      />
      <select
        value={inputType}
        onChange={handleInputTypeChange}
        className="pick__type"
      >
        {types.map((type) => (
          <option key={type.id} value={type.title}>
            {type.title}
          </option>
        ))}
      </select>
      <select
        value={inputCategory}
        onChange={handleInputCategoryChange}
        className="pick__type"
      >
        {categories.map((category) => (
          <option key={category.id} value={category.title}>
            {category.title}
          </option>
        ))}
      </select>
      <input
        value={inputPrice}
        onChange={handleInputPriceChange}
        type="number"
        className="price__input"
        placeholder="Price"
      />
      <input
        value={inputImage}
        onChange={handleInputImageChange}
        type="text"
        className="price__input"
        placeholder="Image"
      />
      <div className="button__wrap">
        <button className="form__button" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddForm;
