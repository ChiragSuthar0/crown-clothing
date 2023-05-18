import Button from '../button/button.component';

import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import CartItem from '../Cart-Item/cart-item.component';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const closeCartDropdown = () => setIsCartOpen(false);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate('/checkout');
    closeCartDropdown();
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length === 0 && (
          <span className="empty-message">Cart is Empty</span>
        )}
        {cartItems.map((T) => (
          <CartItem CartItem={T} key={T.id} />
        ))}
      </div>
      <Button onClick={goToCheckout}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
