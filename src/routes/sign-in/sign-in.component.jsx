/* eslint-disable */

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <section>
      <div className="container">
        <h1>Sign in Working!</h1>
        <button onClick={logGoogleUser}>Sign in</button>
      </div>
    </section>
  );
};

export default SignIn;
