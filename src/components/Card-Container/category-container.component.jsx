import Card from '../Card/card.component';
import './category-container.styles';
import { useEffect } from 'react';
import { CategoryCardContainer } from './category-container.styles';
import { CategoryCard } from '../Card/card.styles';

const CategoryContainer = (props) => {
  useEffect(() => {
    const categoryContainer = document.getElementsByClassName(
      `${CategoryCard.styledComponentId}`
    );
    for (let i = 0; i < categoryContainer.length; i++) {
      categoryContainer[i].classList.remove('category-card-notLoaded');
    }
  }, []);
  return (
    <CategoryCardContainer>
      {props.categories.map((category) => {
        return (
          <Card
            key={category.id}
            categoryName={category.title}
            categoryImg={category.imageUrl}
          />
        );
      })}
    </CategoryCardContainer>
  );
};

export default CategoryContainer;
