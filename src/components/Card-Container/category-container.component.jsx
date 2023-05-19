import Card from '../Card/card.component';
import './category-container.styles.scss';
import { useEffect } from 'react';

const CategoryContainer = (props) => {
  useEffect(() => {
    const categoryContainer = document.getElementsByClassName('category-card');
    for (let i = 0; i < categoryContainer.length; i++) {
      categoryContainer[i].classList.remove('category-card-notLoaded');
    }
  }, []);
  return (
    <div className="category-card-container">
      {props.categories.map((category) => {
        return (
          <Card
            key={category.id}
            categoryName={category.title}
            categoryImg={category.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default CategoryContainer;
