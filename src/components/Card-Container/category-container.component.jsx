import Card from '../Card/card.component';
import './category-container.styles.scss';

const CategoryContainer = (props) => {
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
