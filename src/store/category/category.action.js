import CreateAction from '../../utils/reducers/reducer.utils';
import { CATEGORY_ACTION_TYPES } from './category.types';

export const fetchCategoriesStart = () =>
  CreateAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (CategoriesArray) =>
  CreateAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, CategoriesArray);

export const fetchCategoriesFailed = (error) =>
  CreateAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
