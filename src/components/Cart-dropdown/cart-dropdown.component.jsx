import Button from '../button/button.component';

import './cart-dropdown.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import CartItem from '../Cart-Item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const closeCartDropdown = () => setIsCartOpen(false);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate('/checkout');
    closeCartDropdown();
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length === 0 && <EmptyMessage>Cart is Empty</EmptyMessage>}
        {cartItems.map((T) => (
          <CartItem CartItem={T} key={T.id} />
        ))}
      </CartItems>
      <Button onClick={goToCheckout}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
