import Button from '../button/button.component';

import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import CartItem from '../Cart-Item/cart-item.component';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const closeCartDropdown = () => setIsCartOpen(false);

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
      <Link to="/checkout">
        <Button onClick={closeCartDropdown} style={{ width: '100%' }}>
          Go To Checkout
        </Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
