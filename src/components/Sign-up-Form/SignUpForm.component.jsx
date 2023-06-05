import { useState } from 'react';
import FormInput from '../Form-input/FormInput.component';

import './SignUpForm.styles.scss';
import Button from '../button/button.component';
import { signUpStart } from '../../store/user/user.action';
import { useDispatch } from 'react-redux';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const handleChange = (setter, values) => {
  return (event) => {
    const { name, value } = event.target;
    setter({ ...values, [name]: value });
  };
};

const handleSubmit = (formFields, setFormFields, dispatch) => {
  const { displayName, email, password, confirmPassword } = formFields;
  return async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert('Email and Password cannot be empty');
      return;
    } else if (password !== confirmPassword) {
      alert('Password and Confirm Password does not match');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      setFormFields(defaultFormFields);
    } catch (err) {
      document.firebaseError = err;
      switch (err.code) {
        case 'auth/email-already-in-use':
          alert('Email Already in use');
          break;
        case 'auth/weak-password':
          alert('Weak Password. Password must be 6 characters or more');
          break;
        default:
          if (process.env.NODE_ENV === 'development') console.error(err);
      }
    }
  };
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form
        id="myForm"
        onSubmit={handleSubmit(formFields, setFormFields, dispatch)}
      >
        <FormInput
          label="Display Name"
          inputOptions={{
            type: 'text',
            name: 'displayName',
            onChange: handleChange(setFormFields, formFields),
            required: true,
            value: displayName,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            type: 'email',
            name: 'email',
            onChange: handleChange(setFormFields, formFields),
            required: true,
            value: email,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: 'password',
            name: 'password',
            onChange: handleChange(setFormFields, formFields),
            required: true,
            value: password,
          }}
        />
        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: 'password',
            name: 'confirmPassword',
            onChange: handleChange(setFormFields, formFields),
            required: true,
            value: confirmPassword,
          }}
        />

        <Button type="submit"> Sign Up </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
