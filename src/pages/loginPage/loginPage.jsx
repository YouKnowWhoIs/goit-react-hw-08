import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { Login } from "../../redux/auth/authOps.js";

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const FormSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .email("This must be available email")
      .required("Email is a required!"),
    password: Yup.string()
      .trim()
      .min(8, "It`s must be min 8 symbols")
      .required("Password is a required!"),
  });

  const handleSumbit = (values, actions) => {
    dispatch(
      Login({
        email: values.email,
        password: values.password,
      })
    );

    actions.resetForm();
  };

  return (
    <>
      <h2 className="login-text">Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={handleSumbit}
      >
        <Form className="conteiner-form">
          <label className="login-label">Email:</label>
          <Field
            type="text"
            name="email"
            placeholder="email..."
            className="form-input-login"
          />
          <ErrorMessage name="email" className="error-message-form" />

          <label className="login-label">Password:</label>
          <Field
            type="password"
            name="password"
            placeholder="password..."
            className="form-input-login"
          />
          <ErrorMessage name="password" className="error-message-form" />

          <button type="submit" className="login-button">
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
};
