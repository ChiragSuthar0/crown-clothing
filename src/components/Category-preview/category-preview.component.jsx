import './category-preview.styles';
import ProductCard from '../ProductCard/product-card.component';
import {
  CategoryContainer,
  CategoryPreviewContainer,
  CategoryTitle,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
      </h2>
      <CategoryContainer>
        {products
          .filter((_, i) => i < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </CategoryContainer>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
