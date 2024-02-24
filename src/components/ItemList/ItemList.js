import React from 'react';
import ItemCard from '../ItemCard';

const ItemList = ({filteredItems, addToCart}) => {
    return (
        <div className="items">
        <div className="items__row">
          {filteredItems.map((item) => (
            <div className="items__column" key={item.id}>
              <ItemCard addToCart={addToCart} item={item} />
            </div>
          ))}
        </div>
      </div>
    );
}

export default ItemList;
