import Button from '../button/button.component';

import './cart-dropdown.styles';
import CartItem from '../Cart-Item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles';
import {
  selectCartCount,
  selectCartItems,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../store/cart/cart.action';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();
  const closeCartDropdown = () => dispatch(toggleCart(!isCartOpen));
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate('/checkout');
    closeCartDropdown();
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartCount === 0 && <EmptyMessage>Cart is Empty</EmptyMessage>}
        {cartItems.map((T) => (
          <CartItem CartItem={T} key={T.id} />
        ))}
      </CartItems>
      <Button onClick={goToCheckout}>Go To Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
