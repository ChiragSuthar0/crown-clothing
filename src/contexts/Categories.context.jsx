import { createContext, useEffect, useState } from 'react';
import { getAllProductsAndCategories } from '../utils/firebase.utils';

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const value = { categories };

  useEffect(() => {
    getAllProductsAndCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
