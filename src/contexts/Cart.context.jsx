import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItemCount: 0,
  setCartItemCount: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen, cartItemCount, setCartItemCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
