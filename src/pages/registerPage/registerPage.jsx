import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import { Register } from "../../redux/auth/operations";

const initialValues = {
  email: "",
  userName: "",
  password: "",
};

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const FormSchema = Yup.object().shape({
    userName: Yup.string()
      .trim()
      .min(6, "Too short!")
      .max(20, "Too long!")
      .required("UserName is a required!"),
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
      Register({
        userName: values.userName,
        email: values.email,
        password: values.password,
      })
    );

    actions.resetForm();
  };

  return (
    <>
      <h2 className="register-text">Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={FormSchema}
        onSubmit={handleSumbit}
      >
        <Form className="conteiner-form-register">
          <label className="register-label">Email:</label>
          <Field
            type="text"
            name="email"
            placeholder="email..."
            className="form-input-register"
          />
          <ErrorMessage name="email" className="error-message-form" />

          <label className="register-label">UserName:</label>
          <Field
            type="text"
            name="userName"
            placeholder="userName..."
            className="form-input-register"
          />
          <ErrorMessage name="userName" className="error-message-form" />

          <label className="register-label">Password:</label>
          <Field
            type="password"
            name="password"
            placeholder="password..."
            className="form-input-register"
          />
          <ErrorMessage name="password" className="error-message-form" />

          <button type="submit" className="register-button">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};
