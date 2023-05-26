import styled from 'styled-components';

export const ProductsCategoryContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  row-gap: 25px;

  @media (max-width: 484px) {
    & {
      justify-content: center;
    }
  }
`;
