import CreateAction from '../../utils/reducers/reducer.utils';
import { CATEGORY_ACTION_TYPES } from './category.types';

export const setCategories = (category) =>
  CreateAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, category);
