import styled from 'styled-components';

export const CartItemImage = styled.img`
  max-width: 70px;
  max-height: 70px;
  object-fit: cover;
  width: 35%;
`;

export const CartItemInfo = styled.div`
  width: 65%;
  font-size: 16px;
  flex: 0 0 48%;
  display: flex;
  justify-content: center;

  &.cart-item-name {
    align-items: flex-end;
    text-align: center;
  }

  &.cart-item-quantity {
    align-items: flex-start;
`;

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 70px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
