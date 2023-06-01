import { ProductsContainer } from './Category.styles';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/product-card.component';
import { CategoryTitle } from '../../components/Category-preview/category-preview.styles';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/category/category.selector';

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <section>
      <div className="container">
        <CategoryTitle as="h1">{category}</CategoryTitle>
        <ProductsContainer>
          {products &&
            products.map((T) => <ProductCard key={T.id} product={T} />)}
        </ProductsContainer>
      </div>
    </section>
  );
};

export default Category;
