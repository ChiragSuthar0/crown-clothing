import CreateAction from '../../utils/reducers/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

export const checkUserSession = () =>
  CreateAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  CreateAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  CreateAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  CreateAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) =>
  CreateAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) =>
  CreateAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user, additionalDetails) =>
  CreateAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

export const signUpFailed = (error) =>
  CreateAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutUserStart = () =>
  CreateAction(USER_ACTION_TYPES.SIGN_OUT_START);
export const signOutUserSuccess = () =>
  CreateAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutUserError = (error) =>
  CreateAction(USER_ACTION_TYPES.SIGN_OUT_ERROR, error);
