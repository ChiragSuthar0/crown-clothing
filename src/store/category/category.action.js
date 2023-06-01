import CreateAction from '../../utils/reducers/reducer.utils';
import { CATEGORY_ACTION_TYPES } from './category.types';
import { getAllProductsAndCategories } from '../../utils/firebase/firebase.utils';

export const fetchCategoriesStart = () =>
  CreateAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (CategoriesArray) =>
  CreateAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, CategoriesArray);

export const fetchCategoriesFailed = (error) =>
  CreateAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const CategoriesArray = await getAllProductsAndCategories();
    dispatch(fetchCategoriesSuccess(CategoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailed(error));
  }
};
