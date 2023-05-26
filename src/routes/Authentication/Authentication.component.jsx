/* eslint-disable */

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase.utils';
import SignUpForm from '../../components/Sign-up-Form/SignUpForm.component';
import SignInForm from '../../components/Sign-in-form/SignInForm.component';

import { SignInAndSignUpContainer } from './Authentication.styles';

const Authentication = () => {
  // const { setCurrentUser } = useContext(UserContext);
  // useEffect(() => {
  //   const getRedirectedResult = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (!response) return;
  //     setCurrentUser(response.user);
  //     await createUserDocumentFromAuth(response.user);
  //   };
  //   getRedirectedResult().then();
  // }, []);

  /**
   *  This Method is for Logging in a User from the Google Popup Screen.
   */
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    await createUserDocumentFromAuth(user);
  };

  return (
    <section className="authentication">
      <div className="container">
        <SignInAndSignUpContainer>
          <SignInForm />
          <SignUpForm />
        </SignInAndSignUpContainer>
      </div>
    </section>
  );
};

export default Authentication;
