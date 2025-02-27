import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const CustomField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-10">
      <label htmlFor={props.id || props.name} className="font-md text-md">
        {label}:
      </label>
      <input
        {...field}
        {...props}
        className="mt-2 text-sm p-2 rounded-lg w-[400px] outline-none border-2 border-[#a0aec0] text-white bg-[#4a5568] "
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500">* {meta.error}</div>
      ) : null}
    </div>
  );
};

const Login = () => {
  return (
    <div className="bg-[#2d3748] rounded-xl text-white px-4 py-8 mx-auto my-[100px] w-[430px] h-[500px] flex flex-col shadow-4xl">
      <h1 className="font-bold text-3xl my-4">Login</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(5, "Username must be at least 5 characters.")
            .max(15, "Username cannot be more than 15 characters.")
            .required("Required."),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters.")
            .max(15, "Password cannot be more than 15 characters.")
            .required("Required."),
        })}
        onSubmit={(values) =>
          alert("Successfully Logged In!! Welcome " + values.username)
        }
      >
        <Form className="flex flex-col">
          <CustomField
            label="Username"
            name="username"
            type="text"
            placeholder="Enter username"
          />

          <CustomField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter password"
          />

          <button
            type="submit"
            className="w-[100px] text-[#2d3748] bg-white h-[35px] p-[10px] rounded-md flex items-center justify-center border-none cursor-pointer font-bold"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default Login;
