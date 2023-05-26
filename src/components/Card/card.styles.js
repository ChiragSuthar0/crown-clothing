import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ imageUrl }) => imageUrl});
`;

export const CategoryInfo = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  gap: 20px;
  position: absolute;

  h2 {
    font-weight: bold;
    font-size: 22px;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;
export const CategoryCard = styled.div`
  height: 240px;
  width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;
  transition: 2s;

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${CategoryInfo} {
      opacity: 0.9;
    }
  }

  &.category-card-notLoaded {
    flex: 0 0 0;
    height: 0;
    border: none;
    position: relative;
  }

  @media (max-width: 768px) {
    & {
      width: 48%;
    }
  }

  @media (max-width: 484px) {
    & {
      width: 100%;
    }
  }
`;
