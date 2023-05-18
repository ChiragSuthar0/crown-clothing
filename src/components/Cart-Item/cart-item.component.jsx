import './cart-item.styles.scss';

const CartItem = ({ CartItem }) => {
  const { name, quantity, imageUrl, price } = CartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt="" className="cart-item-image" />
      <h2 className="cart-item-info cart-item-name">{name}</h2>
      <span className="cart-item-info cart-item-quantity">
        {quantity} × ${price}
      </span>
    </div>
  );
};

export default CartItem;
