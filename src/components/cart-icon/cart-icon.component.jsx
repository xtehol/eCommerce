import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden2 }) => (
  <div className="cart-icon" onClick={toggleCartHidden2}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden2: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);