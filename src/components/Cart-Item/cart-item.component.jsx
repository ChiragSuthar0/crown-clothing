import './cart-item.styles';
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
} from './cart-item.styles';

const CartItem = ({ CartItem }) => {
  const { name, quantity, imageUrl, price } = CartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="" />
      <CartItemInfo as="h2" className="cart-item-name">
        {name}
      </CartItemInfo>
      <CartItemInfo as="span" className="cart-item-quantity">
        {quantity} × ${price}
      </CartItemInfo>
    </CartItemContainer>
  );
};

export default CartItem;
