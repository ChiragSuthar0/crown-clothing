import CreateAction from '../../utils/reducers/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

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

export const toggleCart = (boolean) =>
  CreateAction(CART_ACTION_TYPES.TOGGLE_CART, boolean);

export const addCartItems = (cartItems, ProductToAdd) => {
  const newCartItems = addToCart(cartItems, ProductToAdd);
  return CreateAction(CART_ACTION_TYPES.ADD_OR_REMOVE_CART_ITEMS, newCartItems);
};

export const removeCartItems = (cartItems, ProductToRemove) => {
  const newCartItems = removeItem(cartItems, ProductToRemove);
  return CreateAction(CART_ACTION_TYPES.ADD_OR_REMOVE_CART_ITEMS, newCartItems);
};
export const decreaseCartItems = (cartItems, ProductToDecrease) => {
  if (ProductToDecrease.quantity === 1) removeCartItems(ProductToDecrease);
  else {
    const newCartItems = decreaseItem(cartItems, ProductToDecrease);
    return CreateAction(
      CART_ACTION_TYPES.ADD_OR_REMOVE_CART_ITEMS,
      newCartItems
    );
  }
};
