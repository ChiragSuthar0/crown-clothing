import './checkout.styles.scss';
import CheckoutItem from '../../components/Checkout-Item/Checkout-item.component';
import { useSelector } from 'react-redux';
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import {
  addCartItems,
  decreaseCartItems,
  removeCartItems,
} from '../../store/cart/cart.action';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const cartCount = useSelector(selectCartCount);

  return (
    <section>
      <div className="container">
        <div className="checkout-container">
          <div className="checkout-page-columns">
            <span>Product</span>
            <span>Description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Remove</span>
          </div>
          <div className="checkout-items">
            {cartItems.map((cartItem) => (
              <CheckoutItem
                Item={cartItem}
                key={cartItem.id}
                addCartItems={addCartItems}
                decreaseCartItems={decreaseCartItems}
                removeCartItems={removeCartItems}
              />
            ))}
          </div>
          {cartCount !== 0 && <div className="total">Total: ＄{cartTotal}</div>}
        </div>
      </div>
    </section>
  );
};

export default Checkout;
