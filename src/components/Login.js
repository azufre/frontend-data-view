import React from 'react';
import { Link, Form, useActionData, useNavigation } from "react-router-dom";

const Login = () => {

  const data = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="form-container">
      <h2>Login</h2>
      <Form method='post'>
        {
          data && (
            <ul>
              <li>{data.detail}</li>
            </ul>
          )
        }
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            id='username'
            name='username'
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            required
          />
        </div>
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Login'}</button>
        <br />
        <br />
        <Link to="/signup">Create an account</Link>
      </Form>
    </div>
  );
};

export default Login;
