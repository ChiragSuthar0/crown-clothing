import CreateAction, {
  Action,
  ActionWithPayload,
} from '../../utils/reducers/reducer.utils';
import {
  CATEGORY_ACTION_TYPES,
  Category,
  CategoryItems,
} from './category.types';

export type FetchCategoriesStart =
  Action<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

export type CategoryAction =
  | FetchCategoriesFailed
  | FetchCategoriesStart
  | FetchCategoriesSuccess;

export const fetchCategoriesStart = (): FetchCategoriesStart =>
  CreateAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (
  CategoriesArray: Category
): FetchCategoriesSuccess =>
  CreateAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, CategoriesArray);

export const fetchCategoriesFailed = (error: Error): FetchCategoriesFailed =>
  CreateAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
