import FormInput from '../Form-input/FormInput.component';
import { useState } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  signInWithEmail,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';

import './SignInForm.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const handleChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value,
    });
  };

  const handleEmailSignIn = async (event) => {
    event.preventDefault();

    const { email, password } = formFields;

    if (!email || !password) {
      alert('Please Provide Email and Password');
    }

    try {
      await signInWithEmail(email, password);
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Please Provide Valid Email and Password');
          break;
        case 'auth/too-many-requests':
          alert('Please Try Again after some time!');
          break;
        case 'auth/user-not-found':
          alert('No User associated with this email');
          break;
        default:
          if (process.env.NODE_ENV === 'development') console.error(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h1>Sign in Working!</h1>
      <form onSubmit={handleEmailSignIn}>
        <FormInput
          label="Email"
          inputOptions={{
            type: 'email',
            name: 'email',
            onChange: handleChange,
            required: true,
            value: formFields.email,
          }}
        />
        <FormInput
          label="Password"
          inputOptions={{
            type: 'password',
            name: 'password',
            onChange: handleChange,
            required: true,
            value: formFields.password,
          }}
        />

        <div className="buttons-container">
          <Button type="submit"> Sign In </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogleRedirect}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
