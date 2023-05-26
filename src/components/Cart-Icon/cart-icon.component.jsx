import { ReactComponent as ShoppingBag } from './../../assets/shopping-bag.svg';

import './cart-icon.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCount>
        {cartItems.reduce((acc, val) => acc + val.quantity, 0)}
      </ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
