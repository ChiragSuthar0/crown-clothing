import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles';
import { toggleCart } from '../../store/cart/cart.action';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  return (
    <CartIconContainer
      onClick={() => {
        dispatch(toggleCart(!isCartOpen));
      }}
    >
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
