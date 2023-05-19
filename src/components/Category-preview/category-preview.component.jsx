import './category-preview.styles.scss';
import ProductCard from '../ProductCard/product-card.component';
import { useNavigate } from 'react-router-dom';

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  const goto = () => {
    navigate(title);
  };

  return (
    <div className="category-preview-container">
      <h2>
        <span className="category-title" onClick={goto}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="category-container">
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
