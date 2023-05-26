import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 20px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    border-radius: 2px;
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #717171;

    &:hover {
      background-color: #4f4f4f;
    }
  }
`;

export const CategoryTitle = styled(Link)`
  text-align: center;
  width: 100%;
  color: rgb(51, 51, 51);
  display: inline-block;
  text-transform: uppercase;
  font-size: 4.6rem;
  font-weight: 600;
  letter-spacing: 2.8rem;
  cursor: pointer;
`;

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    ${CategoryTitle} {
      font-size: 4rem;
      letter-spacing: 2.8rem;
    }
  }

  @media (max-width: 720px) {
    ${CategoryTitle} {
      font-size: 2.8rem;
      letter-spacing: 2rem;
    }
  }

  @media (max-width: 484px) {
    ${CategoryTitle} {
      font-size: 3rem;
      letter-spacing: 1.2rem;
    }
  }

  @media (max-width: 400px) {
    ${CategoryTitle} {
      font-size: 2rem;
      letter-spacing: 0.6rem;
    }
  }
`;
