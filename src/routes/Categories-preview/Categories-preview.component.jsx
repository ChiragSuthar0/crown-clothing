import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/Categories.context';

import CategoryPreview from '../../components/Category-preview/category-preview.component';

import './Categories-preview.styles';
import { ProductsCategoryContainer } from './Categories-preview.styles';

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <section>
      <div className="container">
        <ProductsCategoryContainer>
          {Object.keys(categories).map((title) => (
            <CategoryPreview
              key={title}
              title={title}
              products={categories[title]}
            />
          ))}
        </ProductsCategoryContainer>
      </div>
    </section>
  );
};

export default CategoriesPreview;
