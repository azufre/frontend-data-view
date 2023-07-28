import { Form, useActionData, useNavigation } from 'react-router-dom';

const Signup = () => {

  const data = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="form-container">
      <h2>Signup</h2>
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
            type='text'
            id='username'
            name='username'
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
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
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Signup'}</button>
      </Form>
    </div>
  );
};

export default Signup;
