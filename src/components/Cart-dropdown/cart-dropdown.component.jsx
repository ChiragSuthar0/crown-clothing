import Button from '../button/button.component';

import './cart-dropdown.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';

const CartDropdown = () => {
  const { cartItemCount } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItemCount === 0 && (
          <span className="empty-message">Cart is Empty</span>
        )}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
