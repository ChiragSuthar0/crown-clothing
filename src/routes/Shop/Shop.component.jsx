import { useContext } from 'react';
import { ProductsContext } from '../../contexts/Products.context';
import ProductCard from '../../components/ProductCard/product-card.component';

import './Shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <section>
      <div className="container">
        <div className="products-container">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
