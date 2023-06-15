import CreateAction, {
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducers/reducer.utils';
import { Category, CATEGORY_ACTION_TYPES } from './category.types';

export type FetchCategoriesStart =
  Action<CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED,
  Error
>;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    CreateAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (CategoriesArray: Category[]): FetchCategoriesSuccess =>
    CreateAction(
      CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
      CategoriesArray
    )
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    CreateAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)
);
