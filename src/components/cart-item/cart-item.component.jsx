import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl: imageUrl2, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl2} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">{quantity} x ${price}</span>
    </div>
  </div>
);

export default CartItem;