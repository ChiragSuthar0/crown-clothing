import CategoriesPreview from '../Categories-preview/Categories-preview.component';
import { Route, Routes } from 'react-router-dom';
import Category from '../Category/Category.component';
import { useEffect } from 'react';
import { fetchCategoriesStart } from '../../store/category/category.action';
import { useDispatch } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

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
