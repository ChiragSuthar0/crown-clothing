import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/Cart.context';
import CheckoutItem from '../../components/Checkout-Item/Checkout-item.component';

const Checkout = () => {
  const { cartItems, addCartItems, decreaseCartItems, removeCartItems } =
    useContext(CartContext);

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
        </div>
      </div>
    </section>
  );
};

export default Checkout;
