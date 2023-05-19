import './Category.styles.scss';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/Categories.context';
import ProductCard from '../../components/ProductCard/product-card.component';

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <section>
      <div className="container">
        <h1 className="category-title">{category}</h1>
        <div className="products-container">
          {products &&
            products.map((T) => <ProductCard key={T.id} product={T} />)}
        </div>
      </div>
    </section>
  );
};

export default Category;
