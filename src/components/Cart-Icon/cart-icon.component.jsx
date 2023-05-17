import { ReactComponent as ShoppingBag } from './../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{cartItemCount}</span>
    </div>
  );
};

export default CartIcon;
