import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 0;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton}, 
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  align-self: center;
  position: absolute;
  top: 40%;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  row-gap: 30px;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  scrollbar-width: thin;

  &::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(80, 80, 80, 0.65);
    border-radius: 10px;
    outline: 1px solid slategrey;

    &:hover {
      background-color: rgba(80, 80, 80, 0.9);
    }

    &:active {
      background-color: rgba(80, 80, 80, 1);
    }
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
`;
