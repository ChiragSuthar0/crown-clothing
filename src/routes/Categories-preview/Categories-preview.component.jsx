import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/Categories.context';

import CategoryPreview from '../../components/Category-preview/category-preview.component';

import './Categories-preview.styles.scss';

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <section>
      <div className="container">
        <div className="products-category-container">
          {Object.keys(categories).map((title) => (
            <CategoryPreview
              key={title}
              title={title}
              products={categories[title]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesPreview;
