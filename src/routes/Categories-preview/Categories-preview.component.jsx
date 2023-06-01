import CategoryPreview from '../../components/Category-preview/category-preview.component';

import './Categories-preview.styles';
import { ProductsCategoryContainer } from './Categories-preview.styles';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/category/category.selector';

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);
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
