/* eslint-disable */

import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from '../../utils/firebase.utils';
import { useEffect } from 'react';
import SignUpForm from '../../components/Sign-up-Form/SignUpForm.component';
import SignInForm from '../../components/Sign-in-form/SignInForm.component';

import './Authentication.styles.scss';

const Authentication = () => {
  useEffect(() => {
    const getRedirectedResult = async () => {
      const response = await getRedirectResult(auth);
      if (!response) return;
      await createUserDocumentFromAuth(response.user);
    };
    getRedirectedResult().then();
  }, []);

  /**
   *  This Method is for Logging in a User from the Google Popup Screen.
   */
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <section className="authentication">
      <div className="container">
        <div className="sign-in-and-sign-up-container">
          <SignInForm />
          <SignUpForm />
        </div>
      </div>
    </section>
  );
};

export default Authentication;
