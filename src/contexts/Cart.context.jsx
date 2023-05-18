import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addCartItems: () => {},
  removeCartItems: () => {},
  decreaseCartItems: () => {},
});

const addToCart = (cartItems, ProductToAdd) => {
  if (cartItems.find((cartItem) => cartItem.id === ProductToAdd.id))
    return cartItems.map((cartItem) => {
      if (cartItem.id === ProductToAdd.id)
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      return cartItem;
    });
  return [...cartItems, { ...ProductToAdd, quantity: 1 }];
};

const removeItem = (cartItems, ProductToRemove) => {
  return cartItems.filter((T) => T.id !== ProductToRemove.id);
};

const decreaseItem = (cartItems, ProductToDecrease) => {
  if (cartItems.find((cartItem) => cartItem.id === ProductToDecrease.id))
    return cartItems.map((cartItem) => {
      if (cartItem.id === ProductToDecrease.id)
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      return cartItem;
    });
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addCartItems = (ProductToAdd) => {
    setCartItems(addToCart(cartItems, ProductToAdd));
  };

  const removeCartItems = (ProductToRemove) => {
    setCartItems(removeItem(cartItems, ProductToRemove));
  };
  const decreaseCartItems = (ProductToDecrease) => {
    if (ProductToDecrease.quantity === 1) removeCartItems(ProductToDecrease);
    else setCartItems(decreaseItem(cartItems, ProductToDecrease));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addCartItems,
    cartItems,
    removeCartItems,
    decreaseCartItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
