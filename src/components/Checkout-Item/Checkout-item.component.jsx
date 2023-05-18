import './Checkout-item.styles.scss';

const CheckoutItem = ({
  Item,
  addCartItems,
  decreaseCartItems,
  removeCartItems,
}) => {
  const { name, quantity, imageUrl, price } = Item;

  const minusCart = () => decreaseCartItems(Item);
  const addToCart = () => addCartItems(Item);
  const removeItem = () => removeCartItems(Item);

  return (
    <div className="checkout-items-container">
      <img src={imageUrl} alt="" className="checkout-item-image" />
      <div className="name">{name}</div>
      <div className="quantity">
        <button onClick={minusCart} className="decQty">
          〈
        </button>
        <span>{quantity}</span>
        <button onClick={addToCart} className="incQty">
          〉
        </button>
      </div>
      <div className="price">${price}</div>
      <div className="remove">
        <button onClick={removeItem} className="remove-item-button">
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
