import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const CustomField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return(
    <div className='field'>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} className="input"/>
      {meta.touched && meta.error ? (
        <div className="error">* {meta.error}</div>
      ) : null}
    </div>
  );
};
 
const Login = () => {

  return (
    <div className="login">
      <h1>Login</h1>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(5, 'Username must be at least 5 characters.')
            .max(15, 'Username cannot be more than 15 characters.')
            .required('Required.'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters.')
            .max(15, 'Password cannot be more than 15 characters.')
            .required('Required.'),
        })}
        onSubmit={(values) =>
          alert('Successfully Logged In!! Welcome ' + values.username)
        }
      >
        <Form>
          <CustomField
            label='Username'
            name='username'
            type='text'
            placeholder='Enter username'
          />

          <CustomField
            label='Password'
            name='password'
            type='password'
            placeholder='Enter password'
          />

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};
export default Login;
