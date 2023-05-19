import CategoriesPreview from '../Categories-preview/Categories-preview.component';
import { Route, Routes } from 'react-router-dom';
import Category from '../Category/Category.component';

const Shop = () => {
  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </>
  );
};

export default Shop;
