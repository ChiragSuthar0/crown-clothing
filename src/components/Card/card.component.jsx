import { useNavigate } from 'react-router-dom';
import { BackgroundImage, CategoryCard, CategoryInfo } from './card.styles';

const Card = ({ categoryName, categoryImg }) => {
  const navigate = useNavigate();
  const redirectToShop = (cat) => {
    return () => navigate('/shop/' + cat.toLowerCase());
  };
  return (
    <CategoryCard
      className="category-card-notLoaded"
      onClick={redirectToShop(categoryName)}
    >
      <BackgroundImage imageUrl={categoryImg} />
      <CategoryInfo>
        <h2>{categoryName}</h2>
        <p>Shop Now</p>
      </CategoryInfo>
    </CategoryCard>
  );
};

export default Card;
