// eslint-disable-next-line
import { all, put, takeLatest } from 'redux-saga/effects';
import {
  createUserDocumentFromAuth,
  createUserDocumentFromEmail,
  getCurrentUser,
  signInWithEmail,
  signInWithGoogleRedirect,
  signOutUser,
} from '../../utils/firebase/firebase.utils';
import { USER_ACTION_TYPES } from './user.types';
import {
  signInFailed,
  signInSuccess,
  signOutUserError,
  signOutUserSuccess,
  signUpFailed,
  signUpSuccess,
} from './user.action';

export function* getSnapshotFromUserAuth(userAuth, additionDetails = null) {
  try {
    const userSnapshot = yield createUserDocumentFromAuth(
      userAuth,
      additionDetails
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(signInFailed(err));
  }
}

export function* signInWithGoogle() {
  try {
    yield signInWithGoogleRedirect();
  } catch (err) {
    yield put(signInFailed(err));
  }
}

export function* signInWithEmailPassword({ payload: { email, password } }) {
  try {
    const { user } = yield signInWithEmail(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(signInFailed(err));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return null;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    yield put(signInFailed(err));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    signInWithEmailPassword
  );
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield createUserDocumentFromEmail(email, password);
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
  try {
    yield getSnapshotFromUserAuth(user, additionalDetails);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

function* signOut() {
  try {
    yield signOutUser();
    yield put(signOutUserSuccess());
  } catch (error) {
    put(signOutUserError(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignUpFromEmailStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}
export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield all([
    onCheckUserSession(),
    onGoogleSignInStart(),
    onEmailSignInStart(),
    onSignUpFromEmailStart(),
    onSignUpSuccess(),
    onSignOutStart(),
  ]);
}
