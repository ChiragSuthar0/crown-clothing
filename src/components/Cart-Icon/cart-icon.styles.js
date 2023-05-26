import { ReactComponent as ShoppingBag } from './../../assets/shopping-bag.svg';

import styled from 'styled-components';

export const ShoppingIcon = styled(ShoppingBag)`
  width: 24px;
  height: 24px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  left: 50%;
  top: 37%;
  translate: -50%;
`;

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
